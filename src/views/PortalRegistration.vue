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
        <form id="portalRegister" class="portal-form" action="/registrar" method="post">
            <h3 class="section-minor-title left less-margin">Datos de sesión</h3>
            <label class="portal-label" for="portalRegisterEmail">Correo electrónico* <span class="greyed">(inalterable,
                    será público en el directorio de ciudadanos)</span></label>
            <input id="portalRegisterEmail" class="portal-input" type="email" name="email"
                placeholder="Introducir dirección" autocomplete="email" required>
            <label class="portal-label" for="portalRegisterPassword">
                Contraseña* <span class="greyed">(protegida con encriptación)</span><br>
                <span class="portal-label-info">• Debe tener entre 6 y 25 carácteres de largo<br>• Combine letras, números y
                    símbolos para mayor seguridad<br>• No repita contraseñas de otros sitios web</span>
            </label>
            <input id="portalRegisterPassword" class="portal-input" type="password" name="password" minlength="6"
                maxlength="25" placeholder="Introducir contraseña" autocomplete="new-password" required>
            <label class="portal-label" for="portalRegisterPasswordRepeat">Repetir contraseña*</label>
            <input id="portalRegisterPasswordRepeat" class="portal-input" type="password"
                placeholder="Reintroducir contraseña" required>
            <p id="passwordStatus"></p>

            <hr class="form-divider">

            <h3 class="section-minor-title left less-margin">Datos de perfil</h3>
            <label class="portal-label" for="portalRegisterName">Nombre completo*</label>
            <input id="portalRegisterName" class="portal-input" type="text" name="fullname" placeholder="Introducir nombre"
                autocomplete="name" required>
            <label class="portal-label" for="portalRegisterGender">Género* <span class="greyed">(solo por motivos
                    estadísticos)</span></label>
            <select id="portalRegisterGender" class="portal-input" name="gender" placeholder="Mujer" autocomplete="sex"
                required>
                <option value="man">Hombre</option>
                <option value="woman">Mujer</option>
                <option value="nonbinary">No binario</option>
            </select>
            <label class="portal-label" for="portalRegisterCountry">Nacionalidad*</label>
            <select id="portalRegisterCountry" class="portal-input" name="country" autocomplete="country" required>

            </select>
            <label class="portal-label" for="portalRegisterBirthdate">Fecha de nacimiento* <span
                    class="greyed">(inalterable, formato DD-MM-AAAA)</span></label>
            <input id="portalRegisterBirthdate" class="portal-input" type="date" min="1920-01-01" max="2022-01-01"
                pattern="\d{4}-\d{2}-\d{2}" name="birthdate" autocomplete="bday" required>
            <div class="g-recaptcha" data-sitekey="6LcYo08jAAAAAMWe26pT6WUPw4CwM9Go7dlsZyX_"></div>

            <input id="portalRegisterSubmit" class="portal-submit" type="submit" value="Registrar cuenta">
        </form>
        <div class="portal-other-options">
            <p class="portal-link"><a href="./portal-login">Iniciar sesión</a></p>
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
