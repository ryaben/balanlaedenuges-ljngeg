<script setup>
import router from '../router/index';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { auth, db } from '../firebase/init.js';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { sendEmailVerification, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { notify } from "@kyvg/vue3-notification";
import Recaptcha from '../components/ReCaptcha.vue';
</script>

<template>
    <section id='portalRegistration'>
        <h1 class="centered-main-title">Solicitar la ciudadanía digital</h1>
        <p class='section-content'>
            El Gran Ducado de Libraterra ofrece a los habitantes del mundo la invitación y oportunidad
            de solicitar una ciudadanía limitada de carácter digital. A través de la misma, y tras su
            posterior verificación por correo electrónico y aprobación del Estado, podrán tener un perfil
            virtual dotado de la capacidad de participar en actividades cívicas y hasta de poseer un
            monedero digital con el cual ser acreedores de coronas libraterrenses. Para ello, primero
            es necesario rellenar el siguiente formulario con los campos obligatorios (es excluyente
            contar con al menos 16 años de edad):
        </p>
        <div id="portalRegister" class="portal-form">
            <h3 class="section-minor-title left less-margin">Datos de sesión</h3>
            <label class="portal-label" for="portalRegisterEmail">Correo electrónico* <span class="greyed">(inalterable,
                    será público en el directorio de ciudadanos)</span></label>
            <input id="portalRegisterEmail" class="portal-input" type="email" name="email"
                placeholder="Introducir dirección" autocomplete="email" v-model="userEmail" required>
            <label class="portal-label" for="portalRegisterPassword">
                Contraseña* <span class="greyed">(protegida con encriptación)</span><br>
                <span class="portal-label-info">• Debe tener entre 6 y 25 carácteres de largo<br>• Combine letras, números y
                    símbolos para mayor seguridad<br>• No repita contraseñas de otros sitios web</span>
            </label>
            <input id="portalRegisterPassword" class="portal-input" :class="{ 'matched': passwordMatch }" type="password"
                name="password" minlength="6" maxlength="25" placeholder="Introducir contraseña" autocomplete="new-password"
                v-model="userPassword" required>
            <label class="portal-label" for="portalRegisterPasswordRepeat">Repetir contraseña*</label>
            <input id="portalRegisterPasswordRepeat" class="portal-input" :class="{ 'matched': passwordMatch }"
                type="password" placeholder="Reintroducir contraseña" v-model="passwordCheck" required>
            <p id="passwordStatus" :class="{ 'matched': passwordMatch }">Los campos <span v-if="!passwordMatch">NO</span>
                coinciden</p>

            <hr class="form-divider">

            <h3 class="section-minor-title left less-margin">Datos de perfil</h3>
            <label class="portal-label" for="portalRegisterName">Nombre completo*</label>
            <input id="portalRegisterName" class="portal-input" type="text" name="fullname" placeholder="Introducir nombre"
                autocomplete="name" v-model="userName" required>
            <label class="portal-label" for="portalRegisterGender">Género* <span class="greyed">(solo por motivos
                    estadísticos)</span></label>
            <select id="portalRegisterGender" class="portal-input" name="gender" placeholder="Mujer" autocomplete="sex"
                v-model="userGender" required>
                <option value="man">Hombre</option>
                <option value="woman">Mujer</option>
                <option value="nonbinary">No binario</option>
            </select>
            <label class="portal-label" for="portalRegisterBirthdate">Fecha de nacimiento* <span
                    class="greyed">(posteriormente inalterable)</span></label>
            <VueDatePicker class="date-picker" v-model="userBirthdate" month-name-format="long"
                :flow="['year', 'month', 'calendar']" :utc="'preserve'" :timezone="'UTC'" now-button-label="Today"
                :required="true" :max-date="new Date()" />
            <Recaptcha @checkbox="checkRecaptcha" />

            <button :disabled="!passwordMatch || !passedRecaptcha" id="portalRegisterSubmit" class="portal-submit"
                @click="signup">Registrar cuenta</button>
        </div>
        <div class="portal-other-options">
            <router-link class="portal-link" :to="{ name: 'PortalLogin' }">Iniciar sesión</router-link>
        </div>
    </section>
</template>

<script>
import defaultProfilePicture from '/img/profile-pic.jpg';

export default {
    components: {
        VueDatePicker,
        Recaptcha
    },
    data() {
        return {
            userPassword: '',
            passwordCheck: '',
            userEmail: '',
            userName: '',
            userGender: 'man',
            userBirthdate: '',
            errorMessages: {
                'auth/email-already-in-use': 'Ya existe una cuenta registrada con esa dirección.',
                'auth/invalid-email': 'El correo electrónico no es válido, asegúrese de usar @ y un dominio.',
                'auth/weak-password': 'La contraseña no es lo suficientemente segura.'
            },
            passedRecaptcha: false
        }
    },
    computed: {
        passwordMatch() {
            return this.userPassword === this.passwordCheck;
        }
    },
    methods: {
        async signup() {
            const that = this;

            createUserWithEmailAndPassword(auth, this.userEmail, this.userPassword)
                .then((data) => {
                    updateProfile(auth.currentUser, {
                        displayName: that.userName,
                        photoURL: defaultProfilePicture
                    })
                        .then(function () {
                            localStorage.setItem('firebase-auth-user', JSON.stringify(data.user));
                            setDoc(doc(db, "users", that.userEmail), {
                                gender: that.userGender,
                                birthdate: Timestamp.fromDate(that.convertTZ(new Date(that.userBirthdate), 'Etc/UTC')),
                                dictionaryEditor: false,
                                activity: [],
                                contactInfo: []
                            });
                            sendEmailVerification(auth.currentUser).then(function () {
                                notify({
                                    title: "Estado de sesión",
                                    text: "Se envió un correo electrónico a su dirección, verifique su cuenta para poder utilizar el Portal.",
                                    type: "success"
                                });
                                router.push('/portal-principal');
                            });
                        })
                        .catch(
                            (err) => console.log(err)
                        );
                })
                .catch(error => {
                    console.log(error)
                    notify({
                        title: "Error al registrarse",
                        text: that.errorMessages[error.code],
                        type: "error"
                    });
                });
        },
        async checkRecaptcha(value) {
            this.passedRecaptcha = value;
        },
        convertTZ(date, tzString) {
            return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
        }
    }
}
</script>

<style scoped>
#passwordStatus {
    color: red;
    font-weight: bold;
    margin-top: 10px;
}

#passwordStatus.matched {
    color: green;
}

.date-picker {
    margin-bottom: 20px;
}
</style>
