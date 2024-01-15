<script setup>
import store from '../store';
import router from '../router/index';
import {
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase/init.js';
import { notify } from '@kyvg/vue3-notification';
import { ConnectWalletButton } from "vue-connect-wallet";
import { useMetaMaskWallet } from "vue-connect-wallet";
import Web3 from 'web3';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
</script>

<template>
    <keep-alive>
        <section id='portalDashboard'>
            <!-- Navbar -->
            <div id="portalNavbar">
                <h3 id="portalNavbarTitle" class="section-minor-title less-margin"></h3>
                <div id="portalIcons">
                    <button class="portal-navbar-button" @click="changeActiveTab('Home')"><img class="portal-navbar-icon"
                            src="/img/home.png" alt="Inicio"><label class="portal-navbar-label">Inicio</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Identity')"><img
                            class="portal-navbar-icon" src="/img/id-card.png" alt="Documento"><label
                            class="portal-navbar-label">Identidad</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Activity')"><img
                            class="portal-navbar-icon" src="/img/activity.png" alt="Actividad"><label
                            class="portal-navbar-label">Actividad</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Wallet')"><img class="portal-navbar-icon"
                            src="/img/wallet.png" alt="Monedero"><label
                            class="portal-navbar-label">Monedero</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Messages')"><img
                            class="portal-navbar-icon" src="/img/messages.png" alt="Mensajes"><label
                            class="portal-navbar-label">Mensajes</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Directory')"><img
                            class="portal-navbar-icon" src="/img/directory.png" alt="Directorio"><label
                            class="portal-navbar-label">Directorio</label></button>
                    <button class="portal-navbar-button" @click="changeActiveTab('Dictionary')"><img
                            class="portal-navbar-icon" src="/img/dictionary.png" alt="Diccionario"><label
                            class="portal-navbar-label">Diccionario</label></button>
                    <button id="portalLogoutButton" class="portal-navbar-button" type="submit" @click="signOutCall"><img
                            class="portal-navbar-icon" src="/img/logout.png" alt="Salir"><label id="portalLogoutLabel"
                            class="portal-navbar-label">Salir</label></button>

                </div>
            </div>

            <!-- Pestañas -->
            <div v-show="activeTab === 'Home'" id="portalHomeSection" class="portal-section main">
                <p id="portalWelcomeTitle" class="portal-title larger">Le damos la bienvenida, {{ user.displayName }}</p>
                <div class="portal-form wide">
                    <label class="portal-home-label" id="portalCitizenshipStatus">Estado de su trámite de ciudadanía:
                        <span v-if="!user.emailVerified" style="color: lightcoral;"><b>Verificación de email
                                pendiente</b></span>
                        <span v-if="user.emailVerified" style="color: green;"><b>Aprobada tras verificación de
                                email</b></span>.
                    </label>
                    <label class="portal-home-label" id="portalRankStatus">Situación actual de visado:
                        <span v-if="!user.emailVerified" style="color: lightcoral;"><b>Laedenljonkèfjeg (turista)</b></span>
                        <span v-if="user.emailVerified" style="color: green;"><b>Laedenkèfjeg (ciudadano
                                digital)</b></span>.
                    </label>
                </div>
            </div>

            <div v-show="activeTab === 'Identity'" id="portalIdentitySection" class="portal-section main">
                <div id="portalProfile" class="portal-form wide top">
                    <button id="portalProfileSubmit" class="portal-submit upper-corner"
                        @click="updateUserProfile">Actualizar
                        datos</button>
                    <h3 class="section-minor-title less-margin left">Foto personal</h3>
                    <div id="portalProfilePictureContainer">
                        <img id="portalIdentityPicture" class="portal-identity-picture" :src="profilePicture" alt="Foto">
                        <div id="portalProfilePictureInputContainer">
                            <label for="portalProfilePicture" class="portal-label">Ruta de imagen</label>
                            <input id="portalProfilePicture" class="portal-input" type="text" name="profilePicture"
                                placeholder="Insertar URL de imagen externa" v-model="profilePicture">
                        </div>
                    </div>
                    <h3 class="section-minor-title less-margin left">Datos de identidad</h3>
                    <label for="portalProfileName" class="portal-label">Nombre completo</label>
                    <input id="portalProfileName" class="portal-input" type="text" name="name" v-model="profileName"
                        required>
                    <label class="portal-label" for="portalProfileGender">Género</label>
                    <select id="portalProfileGender" class="portal-input" name="gender" placeholder="Hombre"
                        autocomplete="sex" required v-model="profileGender">
                        <option value="man">Hombre</option>
                        <option value="woman">Mujer</option>
                        <option value="nonbinary">No binario</option>
                    </select>
                    <h3 class="section-minor-title less-margin left">Datos de contacto</h3>
                    <div style="display: flex; flex-direction: column;">
                        <label for="portalProfileEmail" class="portal-label">Correo electrónico</label>
                        <input id="portalProfileEmail" class="portal-input" type="email" name="email" v-model="profileEmail"
                            disabled>
                    </div>
                    <div v-for="(contact, i) in profileContact" :key="i" style="display: flex; flex-direction: column;">
                        <label class="portal-label">{{ contact.service }}</label>
                        <input class="portal-input" type="text" :name="contact.service" :value="contact.value" disabled>
                    </div>
                </div>

                <div id="portalID" class="portal-form wide">
                    <button id="portalIDDownload" class="portal-submit upper-corner" @click="downloadID">Descargar</button>
                    <h3 class="section-minor-title less-margin left">Documento de Identidad</h3>
                    <div id="portalIDCard">
                        <img id="portalIDCardFlag" src="/img/flag.png" alt="Bandera">
                        <p id="portalIDCardTitle">Gërteg tjl Balanlàedenug | Kefjeg ID</p>
                        <div id="portalIDCardData">
                            <div id="portalIDCardPictureContainer">
                                <label class="id-card-label small centered">Lajtrĵgëlug:</label>
                                <img id="portalIDCardPicture" class="portal-identity-picture" :src="profilePicture"
                                    alt="Foto">
                            </div>
                            <div id="portalIDCardFacts">
                                <label id="portalIDCardName" class="id-card-label">Talwug: {{ user.displayName }}</label>
                                <label id="portalIDCardGender" class="id-card-label">Swejaeg: {{ processedGender }}</label>
                                <label id="portalIDCardBirthdate" class="id-card-label">Wàjdaj: {{ processedBirthdate
                                }}</label>
                                <label id="portalIDCardRank" class="id-card-label">Status:
                                    <span v-if="!user.emailVerified">Laedenljonkèfjeg</span>
                                    <span v-if="user.emailVerified"><b>Laedenkèfjeg</b></span>
                                </label>
                            </div>
                        </div>
                        <div id="portalIDCardExtra">
                            <div class="portal-identity-picture flex no-border">
                                <img id="portalIDCardBanner" src="/img/banner-transparent.png" alt="Estandarte">
                                <label id="portalIDCardNote" class="id-card-label">Alentaj<br>tjlaej<br>Gërtaj</label>
                            </div>
                            <img id="portalIDCardBarcode" src="/img/barcode.gif" alt="Barras">
                            <label id="portalIDCardNumber" class="id-card-label">{{ processedIDNumber }}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="activeTab === 'Activity'" id="portalActivitySection" class="portal-section main">
                En construcción.
            </div>

            <div v-show="activeTab === 'Wallet'" id="portalWalletSection" class="portal-section main">
                <div v-show="wallet.isMetaMask" id="portalWalletTrue" class="portal-form wide top">
                    <a href="https://goerli.etherscan.io/token/0xb9049397072707b504b80025AD149b2E5eaD93e9" target="_blank"
                        class="contract-link">
                        Ver contrato de Corona Libraterrense (BK$)
                    </a>
                    <div id="walletLinkFalse" class="wallet-container">
                        <p v-if="!profileWallet" class='section-content centered-text no-margin'>
                            Dado que MetaMask ya está instalado, solo resta vincular esta instancia de
                            la aplicación web y la dirección pública de Ethereum con su cuenta de Portal Ciudadano.
                            El Portal configurará automáticamente el uso de la red de pruebas Goerli (donde opera BK$)
                            y le solicitará importar el token de las coronas libraterrenses.
                        </p>
                        <!-- <p v-if="profileWallet" id="portalWalletBalance" class="portal-title red larger">Su balance es: {{ getBalance }}</p> -->
                        <ConnectWalletButton id="portalLinkWallet" class="portal-submit" :address="profileWallet"
                            @click="connectWallet">
                            Conectar monedero
                        </ConnectWalletButton>
                    </div>
                    <div style="display: none;" id="walletLinkTrue" class="wallet-container">
                        <p id="portalWalletAddress" class="portal-title smaller"></p>
                        <hr class="form-divider special-margin">
                        <h3 class="section-minor-title less-margin left">Hacer un pago</h3>
                        <div id="walletPaymentContainer">
                            <div id="walletReceiverContainer" class="wallet-subcontainer">
                                <label for="walletReceiverInput" class="portal-label">Dirección del receptor</label>
                                <input v-model="paymentReceiver" id="walletReceiverInput" class="portal-input" type="text"
                                    name="address">
                            </div>
                            <div id="walletAmountContainer" class="wallet-subcontainer">
                                <label for="walletAmountInput" class="portal-label">Monto (en BK$)</label>
                                <input v-model="paymentAmount" id="walletAmountInput" class="portal-input" type="number"
                                    name="amount" min="1" value="1">
                            </div>
                            <button :disabled="!profileWallet" type="button" id="walletPaymentButton" class="portal-submit"
                                @click="sendPayment(profileWallet, paymentReceiver, paymentAmount.toString())">Enviar
                                pago</button>
                        </div>
                    </div>
                </div>
                <p v-if="wallet.isMetaMask" class="portal-link margin-bottom centered recovery-link"
                    @click="toggleWalletInstructions">Rever
                    instrucciones de preparación</p>
                <div v-show="!wallet.isMetaMask || walletInstructions" id="portalWalletFalse" class="portal-form wide top">
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
                        <li>Siga los pasos que le indique la tienda de su navegador y permita la ejecución de la aplicación
                            web.
                        </li>
                        <li>Una vez que MetaMask esté iniciado, creará un nuevo monedero seleccionando la opción <b>"Crear
                                una
                                cartera"</b>:<br><img src="/img/create-wallet.png" alt="Crear monedero"></li>
                        <li>Ingrese una contraseña de su elección, acepte los términos y haga clic en
                            <b>"Crear"</b>:<br><img src="/img/create-password.png" alt="Elegir contraseña">
                        </li>
                        <li>La frase de recuperación le permite recargar su monedero en caso de no tener más acceso a
                            MetaMask.
                            Revélela y asegúrese de guardarla en un lugar seguro:<br><img src="/img/reveal-key.png"
                                alt="Frase secreta"></li>
                        <li>Una vez dentro del monedero mismo, actualice la página para hacer efectivos los cambios en
                            Portal Ciudadano. La plataforma misma se encarga luego de configurar a Metamask para su uso en
                            la red de pruebas Goerli y de incorporar el token de Corona libraterrense.</li>
                    </ol>
                </div>
            </div>

            <div v-show="activeTab === 'Messages'" id="portalMessagesSection" class="portal-section main">
                En construcción.
            </div>

            <div v-show="activeTab === 'Directory'" id="portalDirectorySection" class="portal-section main">
                <div id="portalDirectory" class="portal-form wide top">
                    <div v-for="(user, i) in usersList" :key="i" class="portal-directory-entry">
                        <label class="portal-directory-label">{{ user.id }}</label>
                        <label class="portal-directory-label">Registro: {{ new Date(user.registrationDate.seconds *
                            1000).toDateString() }}</label>
                        <label class="portal-directory-label"></label>
                    </div>
                </div>
            </div>

            <div v-show="activeTab === 'Directory'" class="results-bar">
                <p class="results-text">Hay <b>{{ usersList.length }}</b> ciudadanos digitales registrados.</p>
            </div>

            <div v-show="activeTab === 'Dictionary'" id="portalDictionarySection" class="portal-section main">
                <p v-if="!profileDictionaryEditor" class="section-content">No dispone de privilegios para agregar entradas
                    al diccionario. Puede solicitarlos contactándose a través de <a
                        href="mailto:balanlaedenug@gmail.com">nuestro correo electrónico oficial</a>.</p>

                <div v-if="profileDictionaryEditor">
                    <p class="section-content less-margin">Formulario de nueva entrada en el diccionario:</p>

                    <div class="portal-form wide top">
                        <label class="portal-label">Palabra</label>
                        <input type="text" v-model="wordFormWord">

                        <label class="portal-label">Raíz</label>
                        <input type="text" v-model="wordFormRoot">

                        <label class="portal-label">Descripción</label>
                        <input type="text" v-model="wordFormDescription">

                        <div class="form-vertical-parent">
                            <div class="form-vertical-section">
                                <label class="portal-label">Tipo</label>
                                <select name="wordFormType" v-model="currentType">
                                    <option value="Sustantivo">Sustantivo</option>
                                    <option value="Verbo">Verbo</option>
                                    <option value="Adjetivo">Adjetivo</option>
                                    <option value="Adverbio">Adverbio</option>
                                    <option value="Pronombre">Pronombre</option>
                                    <option value="Adposición">Adposición</option>
                                    <option value="Contracción">Contracción</option>
                                    <option value="Conjunción">Conjunción</option>
                                    <option value="Interjección">Interjección</option>
                                    <option value="Artículo">Artículo</option>
                                </select>

                                <label class="portal-label">Subtipo(s) (uno por línea)</label>
                                <textarea class="non-resizable" name="wordFormSubtypes" cols="20" rows="3"
                                    v-model="currentSubtypes"></textarea>

                                <button id="newWordAddType" class="portal-submit no-margin long"
                                    @click="addType">Agregar</button>

                                <p v-if="wordFormSubtypes.length > 0" style="margin: 12px 0 0 0;">Haga clic en una
                                    entrada para borrarla:</p>
                                <ol class='word-meanings'>
                                    <div v-for="i in wordFormTypes.length" :key="i" @mouseenter="markForDeletion"
                                        @mouseleave="unmarkForDeletion" @click="deleteType(i - 1)">
                                        <li class="word-meaning">{{ wordFormTypes[i - 1] }} ({{ wordFormSubtypes[i - 1] }})
                                        </li>
                                    </div>
                                </ol>
                            </div>

                            <div class="form-vertical-section">
                                <label class="portal-label">Definición</label>
                                <textarea class="non-resizable" name="wordFormDefinition" v-model="currentDefinition"
                                    cols="20" rows="2"></textarea>

                                <label class="portal-label">Ejemplo</label>
                                <textarea class="non-resizable" name="wordFormExample" v-model="currentExample" cols="20"
                                    rows="2"></textarea>

                                <button id="newWordAddDefinition" class="portal-submit no-margin long"
                                    @click="addDefinition">Agregar</button>

                                <p v-if="wordFormDefinitions.length > 0" style="margin: 12px 0 0 0;">Haga clic en una
                                    entrada para borrarla:</p>
                                <ol class='word-meanings'>
                                    <div v-for="i in wordFormDefinitions.length" :key="i" @mouseenter="markForDeletion"
                                        @mouseleave="unmarkForDeletion" @click="deleteDefinition(i - 1)">
                                        <li class="word-meaning">{{ wordFormDefinitions[i - 1] }}</li>
                                        <ul style="padding: 0;">
                                            <li class="word-example"><i>{{ wordFormExamples[i - 1] }}</i></li>
                                        </ul>
                                    </div>
                                </ol>
                            </div>
                        </div>
                        <hr class="form-divider special-margin">
                        <button class="portal-submit no-margin long" @click="publishWord"
                            :disabled="!wordFormWord || !wordFormRoot || !wordFormDescription || !wordFormDefinitions.length || !wordFormTypes.length">Publicar
                            en diccionario</button>
                    </div>
                </div>
            </div>
        </section>
    </keep-alive>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'Home',
            walletInstructions: false,
            walletBalance: 0,
            paymentReceiver: '',
            paymentAmount: 1,
            user: {},

            profileNumber: 0,
            profileName: '',
            profileEmail: '',
            profilePicture: '',
            profileGender: '',
            profileBirthdate: '',
            profileWallet: '',
            profileContact: [],
            profileDictionaryEditor: false,

            wordFormWord: '',
            wordFormRoot: '',
            wordFormDescription: '',
            wordFormDefinitions: [],
            wordFormExamples: [],
            wordFormTypes: [],
            wordFormSubtypes: [],

            currentDefinition: '',
            currentExample: '',
            currentType: 'Sustantivo',
            currentSubtypes: ''
        }
    },
    computed: {
        usersList() {
            return store.getters.users;
        },
        profileExtraData() {
            const that = this;
            return store.getters.users.find(el => el.id === that.profileEmail);
        },
        wallet() {
            return useMetaMaskWallet();
        },
        processedGender() {
            if (this.profileGender === 'man') {
                return 'Sjonkèfjeg';
            } else if (this.profileGender === 'woman') {
                return 'Awalkèfjeg';
            } else {
                return 'Jkë-bjnarjes';
            }
        },
        processedBirthdate() {
            return new Date(this.profileBirthdate.seconds * 1000).toDateString();
        },
        processedIDNumber() {
            const numberLength = this.profileNumber.toString().length;
            const zerosLength = 6 - numberLength;
            return `#${"0".repeat(zerosLength)}${this.profileNumber}`;
        }
    },
    methods: {
        authListener() {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    if (localStorage.getItem('firebase-auth-user') === null) {
                        router.push('/login');
                    }
                } else {
                    this.user = JSON.parse(localStorage.getItem('firebase-auth-user'));
                    this.profileName = user.displayName;
                    this.profileEmail = user.email;
                    this.profilePicture = user.photoURL;
                    this.profileNumber = this.profileExtraData.number;
                    this.profileGender = this.profileExtraData.gender;
                    this.profileBirthdate = this.profileExtraData.birthdate;
                    this.profileWallet = this.profileExtraData.wallet;
                    this.profileContact = this.profileExtraData.contactInfo;
                    this.profileDictionaryEditor = this.profileExtraData.dictionaryEditor;
                }
            })
        },
        async signOutCall() {
            localStorage.removeItem('firebase-auth-user');
            await signOut(auth).then(function () {
                notify({
                    title: 'Estado de sesión',
                    text: 'Ha cerrado la sesión exitosamente.',
                    type: 'warning'
                });
            });
            router.push('/portal-login');
        },
        async connectWallet() {
            if (this.profileWallet == '') {
                const accounts = await this.wallet.connect();
                if (typeof accounts === "string") {
                    return notify({
                        title: 'Conexión con Metamask',
                        text: 'Ha ocurrido un error al obtener las direcciones.',
                        type: 'error'
                    })
                } else {
                    await this.wallet.switchOrAddChain(5);
                    await this.wallet.addTokenToWallet('BK$', '0xb9049397072707b504b80025AD149b2E5eaD93e9', 'https://goerli.etherscan.io/images/main/empty-token.png');
                    this.profileWallet = accounts[0];
                    // this.walletBalance = this.getBalance();
                    notify({
                        title: 'Conexión con Metamask',
                        text: 'El monedero se ha conectado exitosamente.',
                        type: 'success'
                    });
                }
            }
        },
        async sendPayment(sender, receiver, amount) {
            const web3 = new Web3(window.ethereum);
            let hexAmount = web3.utils.toHex(web3.utils.toWei(amount));
            let abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }];
            let tokenAddress = "0xb9049397072707b504b80025AD149b2E5eaD93e9";
            let contract = new web3.eth.Contract(abi, tokenAddress);
            let data = contract.transfer.getData(receiver, hexAmount).encodeABI();

            ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        data: data,
                        from: sender,
                        to: receiver
                    },
                ],
            })
                .then(async function (txHash) {
                    // this.walletBalance = this.getBalance();
                    notify({
                        title: 'Pago con Metamask',
                        text: `Operación <a href='https://goerli.etherscan.io/tx/${txHash}' target='_blank'>${txHash}</a> realizada con éxito.`,
                        type: 'success'
                    });
                })
                .catch(function (error) {
                    notify({
                        title: 'Pago con Metamask',
                        text: 'Ocurrió el siguiente error durante el pago: ' + error,
                        type: 'error'
                    });
                });
        },
        async updateUserProfile() {
            const that = this;

            updateProfile(auth.currentUser, {
                displayName: that.profileName,
                photoURL: that.profilePicture,
            }).then(() => {
                const userRef = doc(db, "users", that.profileEmail);

                updateDoc(userRef, {
                    gender: that.profileGender
                }).then(() => {
                    notify({
                        title: 'Actualización de perfil',
                        text: 'Los cambios se guardaron exitosamente',
                        type: 'success'
                    });
                });
            }).catch((error) => {
                notify({
                    title: 'Actualización de perfil',
                    text: 'Ocurrió el siguiente error al ejecutar los cambios: ' + error,
                    type: 'error'
                });
            });
        },
        async publishWord() {
            addDoc(collection(db, "dictionary"), {
                word: this.wordFormWord,
                root: this.wordFormRoot,
                description: this.wordFormDescription,
                types: this.wordFormTypes,
                subtypes: this.wordFormSubtypes,
                definitions: this.wordFormDefinitions,
                examples: this.wordFormExamples
            }).then(() => {
                notify({
                    title: 'Publicación en diccionario',
                    text: 'La palabra fue publicada exitosamente.',
                    type: 'success'
                });
            }).catch((error) => {
                notify({
                    title: 'Publicación en diccionario',
                    text: 'Ocurrió el siguiente error al publicar: ' + error,
                    type: 'error'
                });
            });
        },
        downloadID() {
            html2canvas(document.querySelector("#portalIDCard"), { useCORS: true }).then(canvas => {
                canvas.toBlob(function (blob) {
                    saveAs(blob, `Kefjeg-ID.png`);
                });
            });
        },
        addDefinition() {
            this.wordFormDefinitions.push(this.currentDefinition);
            this.wordFormExamples.push(this.currentExample);
            this.currentDefinition = '';
            this.currentExample = '';
        },
        addType() {
            let subtypesList = '';
            const subtypesArray = this.currentSubtypes.split("\n");
            for (let i = 0; i < subtypesArray.length; i++) {
                const element = subtypesArray[i];
                subtypesList += element;
                if (i < subtypesArray.length - 1) {
                    subtypesList += ', ';
                }
            }

            this.wordFormTypes.push(this.currentType);
            this.wordFormSubtypes.push(subtypesList);
            this.currentType = 'Sustantivo';
            this.currentSubtypes = '';
        },
        deleteDefinition(index) {
            this.wordFormDefinitions.splice(index, 1);
            this.wordFormExamples.splice(index, 1);
        },
        deleteType(index) {
            this.wordFormTypes.splice(index, 1);
            this.wordFormSubtypes.splice(index, 1);
        },
        markForDeletion(event) {
            event.target.classList.add('deletable');
        },
        unmarkForDeletion(event) {
            event.target.classList.remove('deletable');
        },
        changeActiveTab(value) {
            this.activeTab = value;
        },
        toggleWalletInstructions() {
            this.walletInstructions = !this.walletInstructions;
        }
    },
    async mounted() {
        this.authListener();
    }
}
</script>

<style scoped>
#portalDashboard {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0;
}

#portalNavbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    background: wheat;
    border-bottom: 2px solid black;
    padding: 8px;
}

#portalNavbarTitle {
    display: none;
    margin-left: 15px;
    margin-bottom: 10px;
}

#portalIcons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
}

#portalProfile,
#portalID {
    position: relative;
}

#portalProfilePictureContainer {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

#portalProfilePictureInputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
}

#portalProfileGender {
    margin-bottom: 15px;
}

#portalIDCard {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 483px;
    height: 254px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
    background-image: url("../img/dnl-fondo.png");
    background-color: transparent;
    background-repeat: repeat;
}

#portalIDCardFlag {
    position: absolute;
    top: 7px;
    right: 10px;
    width: 50px;
    border: 1px solid black;
    border-radius: 4px;
}

#portalIDCardTitle {
    margin: 0 0 13px 2px;
    font-size: 23px;
    font-weight: bold;
    /* text-decoration: underline; */
}

#portalIDCardData {
    display: flex;
    border: 2px ridge slategray;
    border-radius: 6px;
    padding: 1px 0 7px 7px;
}

#portalIDCardPictureContainer {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding-top: 2px;
}

#portalIDCardFacts {
    display: flex;
    flex-direction: column;
    width: 371px;
    margin-left: 15px;
}

#portalIDCardName {
    margin-top: 20px;
}

#portalIDCardRank {
    margin-bottom: 0;
}

#portalIDCardExtra {
    display: flex;
    align-items: center;
}

#portalIDCardBanner {
    width: 100%;
    margin: auto;
}

#portalIDCardNote {
    z-index: 2;
    position: absolute;
    text-align: center;
    font-size: 10px;
    margin-bottom: 0;
    top: 40px;
}

#portalIDCardBarcode {
    width: 265px;
    height: 55px;
    margin: 20px auto 0 14px;
}

#portalIDCardNumber {
    margin: 8px 0 0 auto;
    padding: 6px;
    border: 2px solid indianred;
    border-radius: 6px;
}

.id-card-label {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
}

.id-card-label.small {
    font-size: 14px;
}

.id-card-label.centered {
    text-align: center;
}

.portal-id-value {
    color: red;
}

#walletInstalationDescription {
    margin-bottom: 20px;
}

.portal-steps-list {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 20px;
    font-size: 16px;
}

.portal-steps-list li {
    margin-bottom: 10px;
}

.wallet-container {
    display: flex;
    flex-direction: column;
}

#portalLinkAddress {
    display: none;
    pointer-events: none;
}

#portalWalletBalance {
    margin-bottom: 15px;
}

#walletPaymentContainer {
    display: flex;
    justify-content: space-between;
}

.wallet-subcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}

#walletPaymentButton {
    width: 30%;
    margin: 0;
}

#portalDirectory {
    height: auto;
}

.portal-submit.long {
    margin: 0;
    width: auto;
    max-width: none;
}

.non-resizable {
    resize: none;
}

.contract-link {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
}

.section-content.less-margin {
    margin-bottom: 15px;
}

.form-vertical-parent {
    display: flex;
    width: 100%;
}

.form-vertical-section {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 15px;
}

.form-vertical-section:last-child {
    margin-right: 0;
}

.word-meanings {
    margin-top: 0;
}

div.deletable {
    background: indianred;
    opacity: 0.7;
    cursor: pointer;
}

@media only screen and (max-width: 999px) {
    .portal-navbar-button {
        width: 45px;
        margin-left: 1px;
        margin-right: 1px;
    }

    .portal-navbar-button.selected,
    .portal-navbar-button:hover {
        width: 97px;
    }

    .portal-navbar-button.selected .portal-navbar-label,
    .portal-navbar-button:hover .portal-navbar-label {
        display: block;
    }

    .portal-navbar-label {
        display: none;
    }
}

@media only screen and (max-width: 470px) {
    #portalNavbarTitle {
        display: block;
    }

    .portal-navbar-button.selected,
    .portal-navbar-button:hover {
        width: 45px;
    }

    .portal-navbar-button.selected .portal-navbar-label,
    .portal-navbar-button:hover .portal-navbar-label {
        display: none;
    }

    .portal-navbar-label {
        display: none;
    }

    .portal-directory-label {
        font-size: 12px;
    }
}
</style>
