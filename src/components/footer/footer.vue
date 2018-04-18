<template>
    <footer>
        <div class="row">
            <cc-social/>
            <cc-menu-institucional/>
            <cc-menu-informacao/>
            <cc-menu-conheca/>
            <cc-news/>
        </div>
        <cc-contatos/>
    </footer>
    
</template>

<script>
    import ccSocial from './social.vue';
    import ccMenuInstitucional from './menu-institucional.vue';
    import ccMenuInformacao from './menu-informacao.vue';
    import ccMenuConheca from './menu-conheca.vue';
    import ccNews from './news.vue';
    import ccContatos from './contatos.vue';
    
    export default {
        data() {
            return {
                
            }
        },
        components: {
            ccSocial,
            ccMenuInstitucional,
            ccMenuInformacao,
            ccMenuConheca,
            ccNews,
            ccContatos,
        }
    }

</script>

<style lang="scss">
    footer {
        background-color: #FFF;
        border-top: 2px solid #AEB6C1;
        > div.row:nth-child(1) {
            position: relative;
            padding-top: 70px;
        }
    }
    
</style>