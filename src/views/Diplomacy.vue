<script setup>
import DiplomacyList from '../components/DiplomacyList.vue';
</script>

<template>
    <section id='foreignPage'>
        <h2 class='section-subtitle'>Tratados intermicronacionales</h2>
        <p class='section-content'>
            El Gran Ducado de Libraterra traslada la siguiente documentación diplomática al campo
            del dominio público, a fines de dar conocimiento de sus relaciones exteriores y, en muchos
            casos, de cumplimentar con los incisos que suponen la divulgación de esta información.
            Se incluyen en esta sección tanto los tratados y cualquier tipo de cooperación con otras
            micronaciones, como información sobre adhesión a instituciones y órganos supramicronacionales.
        </p>
        <h3 class="section-minor-title">Membresías en organizaciones intermicronacionales</h3>
        <DiplomacyList id="membershipsList" :diplomatic-entries="memberships" />
        <h3 class="section-minor-title">Relaciones diplomáticas con micronaciones</h3>
        <DiplomacyList :diplomatic-entries="relationships" />
    </section>
</template>

<script>
export default {
    components: {
        DiplomacyList
    },
    data() {
        return {
            memberships: [
                {
                    flag: 'omu.png',
                    partnerName: 'Organización de Micronaciones Unidas (OMU)',
                    partnerLink: 'https://omu-foro.forosactivos.net/',
                    relation: 'Miembro pleno',
                    accessText: 'Visitar',
                    accessLink: 'https://omu-foro.forosactivos.net/t2169-solicitud-de-ingreso-del-gran-ducado-de-libraterra'
                }
            ],
            relationships: [
                {
                    flag: 'triduoria.png',
                    partnerName: 'Estado Libre de Triduoria',
                    partnerLink: 'https://sites.google.com/view/triduoria',
                    relation: 'Tratado de Reconocimiento Mutuo y Cooperación',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/TRI001.pdf'
                },
                {
                    flag: 'eldorado.png',
                    partnerName: 'Estado Social de El Dorado',
                    partnerLink: 'https://eldoradogov.wixsite.com/estadodeeldorado',
                    relation: 'Tratado de Paz, Amistad, Alianza y Reconocimiento Mutuo',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/DOR001.pdf'
                },
                {
                    flag: 'eskeria.png',
                    partnerName: 'Gran Ducado de Eskeria',
                    partnerLink: 'http://gobiernoeskeria.wixsite.com/oficial',
                    relation: 'Tratado de Relaciones Diplomáticas',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/ESK001.pdf'
                },
                {
                    flag: 'valumar.jpg',
                    partnerName: 'Principado de Valumar',
                    partnerLink: 'https://valumar.blogspot.com/',
                    relation: 'Tratado de Amistad, Colaboración y Reconocimiento Mutuo',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/VAL001.pdf'
                },
                {
                    flag: 'zaerrion.png',
                    partnerName: 'República de Zaerrion',
                    partnerLink: 'https://sites.google.com/view/republica-de-zaerrion/inicio',
                    relation: 'Tratado de Total Paz y Reconocimiento',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/ZAR001.jpg'
                },
                {
                    flag: 'angosvria.png',
                    partnerName: 'Confederación Austral de Angosvria',
                    partnerLink: 'https://unionangosvria.wixsite.com/angosvria',
                    relation: 'Tratado de Relaciones Diplomáticas',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/ANG001.pdf'
                },
                {
                    flag: 'amestris.jpg',
                    partnerName: 'Reino Iluminado de Amestris',
                    partnerLink: 'https://reinoiluminadodeamestris.com/',
                    relation: 'Tratado de Amistad, Colaboración y Reconocimiento Mutuo',
                    accessText: 'Descargar',
                    accessLink: 'http://balanlaedenug.net.ar/public/doc/AME001.pdf'
                }
            ]
        }
    },
}
</script>

<style scoped>
#membershipsList:deep(.foreign-logo) {
    border: none;
}
</style>
