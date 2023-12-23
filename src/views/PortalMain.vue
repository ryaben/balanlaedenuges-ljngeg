<template>
    <section id='portalDashboard'>
        <!-- Navbar -->
        <div id="portalNavbar">
            <h3 id="portalNavbarTitle" class="section-minor-title less-margin"></h3>
            <div id="portalIcons">
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/home.png"
                        alt="Inicio"><label class="portal-navbar-label">Inicio</label></button>
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/id-card.png"
                        alt="Documento"><label class="portal-navbar-label">Identidad</label></button>
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/activity.png"
                        alt="Actividad"><label class="portal-navbar-label">Actividad</label></button>
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/wallet.png"
                        alt="Monedero"><label class="portal-navbar-label">Monedero</label></button>
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/messages.png"
                        alt="Mensajes"><label class="portal-navbar-label">Mensajes</label></button>
                <button class="portal-navbar-button"><img class="portal-navbar-icon" src="/img/directory.png"
                        alt="Directorio"><label class="portal-navbar-label">Directorio</label></button>
                <form class="form-button" action="/cerrar-sesion" method="post"><button id="portalLogoutButton"
                        class="portal-navbar-button" type="submit"><img class="portal-navbar-icon"
                            src="/img/logout.png" alt="Salir"><label id="portalLogoutLabel"
                            class="portal-navbar-label">Salir</label></button></form>
            </div>
        </div>

        <!-- Pestañas -->
        <div id="portalHomeSection" class="portal-section main">
            <p id="portalWelcomeTitle" class="portal-title larger"></p>
            <div class="portal-form wide">
                <label class="portal-home-label" id="portalCitizenshipStatus"></label>
                <label class="portal-home-label" id="portalRankStatus"></label>
            </div>
        </div>

        <div id="portalIdentitySection" class="portal-section main">
            <form id="portalProfile" class="portal-form wide top" action="/actualizar-perfil" method="post">
                <input id="portalProfileSubmit" class="portal-submit upper-corner" type="submit" value="Actualizar datos">
                <h3 class="section-minor-title less-margin left">Foto personal</h3>
                <div id="portalProfilePictureContainer">
                    <img id="portalIdentityPicture" class="portal-identity-picture" src="" alt="Foto">
                    <div id="portalProfilePictureInputContainer">
                        <label for="portalProfilePicture" class="portal-label">Ruta de imagen</label>
                        <input id="portalProfilePicture" class="portal-input" type="text" name="profilePicture"
                            placeholder="Insertar URL de imagen externa">
                    </div>
                </div>
                <h3 class="section-minor-title less-margin left">Datos de identidad</h3>
                <label for="portalProfileName" class="portal-label">Nombre completo</label>
                <input id="portalProfileName" class="portal-input" type="text" name="name" required>
                <label class="portal-label" for="portalProfileGender">Género</label>
                <select id="portalProfileGender" class="portal-input" name="gender" placeholder="Hombre" autocomplete="sex"
                    required>
                    <option value="man">Hombre</option>
                    <option value="woman">Mujer</option>
                    <option value="nonbinary">No binario</option>
                </select>
                <h3 class="section-minor-title less-margin left">Datos de contacto</h3>
                <label for="portalProfileEmail" class="portal-label">Correo electrónico</label>
                <input id="portalProfileEmail" class="portal-input" type="email" name="email" disabled>
                <label for="portalProfileTwitter" class="portal-label">Usuario de Twitter</label>
                <input id="portalProfileTwitter" class="portal-input" type="text" name="twitter">
                <label for="portalProfileDiscord" class="portal-label">Usuario de Discord</label>
                <input id="portalProfileDiscord" class="portal-input bottom" type="text" name="discord">
            </form>

            <div id="portalID" class="portal-form wide">
                <button id="portalIDDownload" class="portal-submit upper-corner">Descargar</button>
                <h3 class="section-minor-title less-margin left">Documento de Identidad</h3>
                <div id="portalIDCard">
                    <img id="portalIDCardFlag" src="/img/flag.png" alt="Bandera">
                    <p id="portalIDCardTitle">Gërteg tjl Balanlàedenug | Kefjeg ID</p>
                    <div id="portalIDCardData">
                        <div id="portalIDCardPictureContainer">
                            <label class="id-card-label small centered">Lajtrĵgëlug:</label>
                            <img id="portalIDCardPicture" class="portal-identity-picture" src="" alt="Foto">
                        </div>
                        <div id="portalIDCardFacts">
                            <label id="portalIDCardName" class="id-card-label"></label>
                            <label id="portalIDCardGender" class="id-card-label"></label>
                            <label id="portalIDCardBirthdate" class="id-card-label"></label>
                            <label id="portalIDCardCountry" class="id-card-label"></label>
                            <label id="portalIDCardRank" class="id-card-label"></label>
                        </div>
                    </div>
                    <div id="portalIDCardExtra">
                        <div class="portal-identity-picture flex no-border">
                            <img id="portalIDCardBanner" src="/img/banner-transparent.png" alt="Estandarte">
                            <label id="portalIDCardNote" class="id-card-label">Alentaj<br>tjlaej<br>Gërtaj</label>
                        </div>
                        <img id="portalIDCardBarcode" src="/img/barcode.gif" alt="Barras">
                        <label id="portalIDCardNumber" class="id-card-label"></label>
                    </div>
                </div>
            </div>
        </div>

        <div id="portalActivitySection" class="portal-section main">
            En construcción.
        </div>

        <div id="portalWalletSection" class="portal-section main">
            <form id="portalWalletTrue" class="portal-form wide top" action="/vincular-monedero" method="post">
                <div id="walletLinkTrue" class="wallet-container">
                    <p id="portalWalletBalance" class="portal-title red larger"></p>
                    <p id="portalWalletAddress" class="portal-title smaller"></p>
                    <hr class="form-divider special-margin">
                    <h3 class="section-minor-title less-margin left">Hacer un pago</h3>
                    <div id="walletPaymentContainer">
                        <div id="walletReceiverContainer" class="wallet-subcontainer">
                            <label for="walletReceiverInput" class="portal-label">Dirección del receptor</label>
                            <input id="walletReceiverInput" class="portal-input" type="text" name="address">
                        </div>
                        <div id="walletAmountContainer" class="wallet-subcontainer">
                            <label for="walletAmountInput" class="portal-label">Monto (en BK$)</label>
                            <input id="walletAmountInput" class="portal-input" type="number" name="amount" min="1"
                                value="1">
                        </div>
                        <button type="button" id="walletPaymentButton" class="portal-submit">Enviar pago</button>
                    </div>
                </div>
                <div id="walletLinkFalse" class="wallet-container">
                    <p class='section-content centered-text no-margin'>
                        Dado que MetaMask ya está instalado, solo resta vincular esta instancia de
                        la aplicación web y la dirección pública de Ethereum con su cuenta de Portal Ciudadano.
                    </p>
                    <input id="portalLinkAddress" type="text" name="walletAddress">
                    <button type="button" id="portalLinkWallet" class="portal-submit">Vincular</button>
                </div>
            </form>
            <p class="portal-link margin-bottom centered"><a id="portalWalletInstructions" class="recovery-link">Rever
                    instrucciones de preparación</a></p>
            <div id="portalWalletFalse" class="portal-form wide top">
                <p id="walletInstalationDescription" class='section-content no-margin'>
                    Para poder utilizar el monedero y disponer de coronas libraterrenses,
                    es necesario instalar <a href="https://metamask.io/download/" target="_blank">MetaMask</a> en su
                    navegador.
                    Esta aplicación web es de las más reconocidas y seguras en el mundo
                    a la hora de manipular criptomonedas y activos digitales. El procedimiento
                    es rápido y sencillo. <b>Nota: La criptomoneda que manipulará aquí no tiene valor real y funciona en
                        una red de pruebas de Ethereum.</b>
                </p>
                <ol class="portal-steps-list">
                    <li>Si aún no lo hizo, instale MetaMask en su navegador a través del siguiente enlace: <a
                            href="https://metamask.io/download/" target="_blank">https://metamask.io/download/</a></li>
                    <li>Siga los pasos que le indique la tienda de su navegador y permita la ejecución de la aplicación web.
                    </li>
                    <li>Una vez que MetaMask esté iniciado, creará un nuevo monedero seleccionando la opción <b>"Crear una
                            cartera"</b>:<br><img src="/img/create-wallet.png" alt="Crear monedero"></li>
                    <li>Ingrese una contraseña de su elección, acepte los términos y haga clic en <b>"Crear"</b>:<br><img
                            src="/img/create-password.png" alt="Elegir contraseña"></li>
                    <li>La frase de recuperación le permite recargar su monedero en caso de no tener más acceso a MetaMask.
                        Revélela y asegúrese de guardarla en un lugar seguro:<br><img src="/img/reveal-key.png"
                            alt="Frase secreta"></li>
                    <li>Una vez dentro del monedero, cambie de red en Ethereum seleccionando el recuadro que indica la red
                        actual, presione <b>"Mostrar/ocultar redes de prueba"</b> y en la sección que se abre active la
                        opción correspondiente:<br><img src="/img/testnets.png" alt="Redes de prueba"><br><img
                            src="/img/activate-option.png" alt="Activar"></li>
                    <li>Ahora que está activada, remítase a la <b>red de pruebas Goerli</b>:<br><img
                            src="/img/change-net.png" alt="Goerli"></li>
                    <li>(Opcional, recomendado) Añada la criptomoneda <a
                            href="https://goerli.etherscan.io/address/0xb9049397072707b504b80025AD149b2E5eaD93e9"
                            target="_blank">Corona libraterrense (BK$)</a> en su monedero con la dirección
                        <b>0xb9049397072707b504b80025AD149b2E5eaD93e9</b>:<br><img src="/img/import-token.png"
                            alt="Añadir criptomoneda"><br><img src="/img/token-info.png"
                            alt="Información de criptomoneda">
                    </li>
                    <li>Actualice la página para hacer efectivos los cambios en Portal Ciudadano.</li>
                </ol>
            </div>
        </div>

        <div id="portalMessagesSection" class="portal-section main">
            En construcción.
        </div>

        <div id="portalDirectorySection" class="portal-section main">
            <div id="portalDirectory" class="portal-form wide top">

            </div>
        </div>

        <div class="results-bar">
            <p class="results-text"></p>
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

<style scoped>
#portalDashboard {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}
</style>
