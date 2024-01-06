<script setup>
import router from '../router/index';
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from '../firebase/init.js';
import { notify } from "@kyvg/vue3-notification";
import Recaptcha from '../components/ReCaptcha.vue';
</script>

<template>
    <section id='portalLogin'>
        <h1 class="centered-main-title">Portal Ciudadano</h1>
        <p class='section-content'>
            Le damos la bienvenida a la sección para ciudadanos digitales. Inicie sesión para
            consultar el estado de su legajo, verificar y/o actualizar su información, utilizar
            su monedero digital, o participar en deberes y acciones cívicas dentro del Gran Ducado de Libraterra.
        </p>
        <div v-if="!recoveryDisplay" id="portalStart" class="portal-form">
            <label class="portal-label" for="portalLoginEmail">Correo electrónico</label>
            <input id="portalLoginEmail" class="portal-input" type="email" name="email" placeholder="Introducir dirección"
                v-model="loginEmail" required>
            <label class="portal-label" for="portalLoginPassword">Contraseña</label>
            <input id="portalLoginPassword" class="portal-input" type="password" name="password"
                placeholder="Introducir contraseña" v-model="loginPassword" required>

            <input id="portalLoginSubmit" class="portal-submit" type="submit" value="Iniciar sesión" @click="login">
        </div>
        <div v-if="recoveryDisplay" class="portal-form portal-recovery">
            <label class="portal-label" for="portalRecoveryEmail">Correo electrónico</label>
            <input id="portalRecoveryEmail" class="portal-input" type="email" name="email"
                placeholder="Introducir dirección" autocomplete="email" v-model="resetEmail" required>
            <Recaptcha @checkbox="checkRecaptcha" />

            <input id="portalRecoverySubmit" class="portal-submit" type="submit" value="Enviar correo de recuperación"
                @click="resetPassword" :disabled="!passedRecaptcha">
        </div>
        <div class="portal-other-options">
            <router-link class="portal-link" :to="{ name: 'PortalRegistration' }">Registrarse</router-link>
            <p v-if="!recoveryDisplay" class="portal-link recovery-link" @click="toggleRecoveryDisplay">¿Olvidó la
                contraseña?</p>
            <p v-if="recoveryDisplay" class="portal-link recovery-link" @click="toggleRecoveryDisplay">Iniciar sesión</p>
        </div>
    </section>
</template>

<script>
export default {
    components: {
        Recaptcha
    },
    data() {
        return {
            recoveryDisplay: false,
            loginEmail: '',
            loginPassword: '',
            resetEmail: '',
            errorMessages: {
                'auth/invalid-email': 'El correo electrónico no es válido, asegúrese de usar @ y un dominio.',
                'auth/user-not-found': 'No hay una cuenta registrada con ese correo electrónico.',
                'auth/wrong-password': 'La contraseña ingresada es incorrecta, por favor intente de nuevo o restablézcala.'
            },
            passedRecaptcha: false
        }
    },
    methods: {
        authListener() {
            onAuthStateChanged(auth, user => {
                if (user) {
                    router.push('/portal-principal');
                }
            });
        },
        async checkRecaptcha(value) {
            this.passedRecaptcha = value;
        },
        async login() {
            const that = this;

            setPersistence(auth, browserLocalPersistence)
                .then(() => {
                    signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword)
                        .then((data) => {
                            notify({
                                title: "Estado de sesión",
                                text: "El inicio de sesión fue exitoso.",
                                type: "success"
                            });
                            localStorage.setItem('firebase-auth-user', JSON.stringify(data.user));
                            router.push('/portal-principal');
                        })
                        .catch(error => {
                            notify({
                                title: "Error al iniciar sesión",
                                text: that.errorMessages[error.code],
                                type: "error"
                            });
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    notify({
                        title: errorCode,
                        text: errorMessage,
                        type: "error"
                    });
                });
        },
        async resetPassword() {
            const that = this;

            sendPasswordResetEmail(auth, this.resetEmail)
                .then(() => {
                    notify({
                        title: "Restablecer contraseña",
                        text: "Si existe una cuenta con esa dirección, entonces se le envió un correo electrónico. Por favor verifique su casilla.",
                        type: "success"
                    });
                })
                .catch((error) => {
                    notify({
                        title: "Error al restablecer la contraseña",
                        text: that.errorMessages[error.code],
                        type: "error"
                    });
                });
        },
        toggleRecoveryDisplay() {
            this.recoveryDisplay = !this.recoveryDisplay;
        }
    },
    beforeMount() {
        this.authListener();
    },
    onBeforeUnmount() {
        this.authListener();
    }
}
</script>

<style scoped>
#portalRecoverySubmit {
    margin-top: 12px;
}
</style>
