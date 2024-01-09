<template>
    <section id='portalChangePasswordForm'>
        <h3 class="section-minor-title">Restablecimiento de contraseña en Portal Ciudadano</h3>

        <form class="portal-form" action="" method="post">
            <label class="portal-label" for="portalChangePassword">
                Nueva contraseña* <span class="greyed">(protegida con encriptación)</span><br>
                <span class="portal-label-info">• Debe tener entre 6 y 25 carácteres de largo<br>• Combine letras, números y
                    símbolos para mayor seguridad<br>• No repita contraseñas de otros sitios web</span>
            </label>
            <input id="portalChangePassword" class="portal-input" type="password" name="password" minlength="6"
                maxlength="25" placeholder="Introducir contraseña" autocomplete="new-password" required>
            <label class="portal-label" for="portalChangePasswordRepeat">Repetir contraseña*</label>
            <input id="portalChangePasswordRepeat" class="portal-input" type="password"
                placeholder="Reintroducir contraseña" required>
            <p id="passwordChangeStatus"></p>

            <input id="portalChangePasswordSubmit" class="portal-submit" type="submit" value="Restablecer contraseña">
        </form>
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
