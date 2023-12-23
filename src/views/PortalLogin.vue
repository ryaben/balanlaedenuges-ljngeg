<template>
    <section id='portalLogin'>
        <h1 class="centered-main-title">Portal Ciudadano</h1>
        <p class='section-content'>
            Le damos la bienvenida a la sección para ciudadanos digitales. Inicie sesión para
            consultar el estado de su legajo, verificar y/o actualizar su información, utilizar
            su monedero digital, o participar en deberes y acciones cívicas dentro del Gran Ducado de Libraterra.
        </p>
        <form id="portalStart" class="portal-form" action="/autenticar" method="post">
            <label class="portal-label" for="portalLoginEmail">Correo electrónico</label>
            <input id="portalLoginEmail" class="portal-input" type="email" name="email" placeholder="Introducir dirección"
                required>
            <label class="portal-label" for="portalLoginPassword">Contraseña</label>
            <input id="portalLoginPassword" class="portal-input" type="password" name="password"
                placeholder="Introducir contraseña" required>

            <input id="portalLoginSubmit" class="portal-submit" type="submit" value="Iniciar sesión">
        </form>
        <form class="portal-form portal-recovery" action="/recuperar" method="post">
            <label class="portal-label" for="portalRecoveryEmail">Correo electrónico</label>
            <input id="portalRecoveryEmail" class="portal-input" type="email" name="email"
                placeholder="Introducir dirección" autocomplete="email" required>
            <label class="portal-label" for="portalRecoveryNewLink"><input id="portalRecoveryNewLink" type="radio"
                    name="recovery_option" value="new_link" checked>Nuevo correo de verificación</label>
            <label class="portal-label" for="portalRecoveryForgotPassword"><input id="portalRecoveryForgotPassword"
                    type="radio" name="recovery_option" value="forgot_password">Restablecer contraseña</label>
            <div class="g-recaptcha" data-sitekey="6LcYo08jAAAAAMWe26pT6WUPw4CwM9Go7dlsZyX_"></div>

            <input id="portalRecoverySubmit" class="portal-submit" type="submit" value="Recuperar">
        </form>
        <div class="portal-other-options">
            <p class="portal-link"><a href="./portal-registro">Registrarse</a></p>
            <p class="portal-link"><a id="portalRecoveryLink" class="recovery-link">Recuperación de cuenta</a></p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scoped></style>
