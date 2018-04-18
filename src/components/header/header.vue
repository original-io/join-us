<template>
    <header>
        <div class="row">
            <a id="logo" class="" href="/">
                <img :src="imgLogo" alt="Logo da empresa" title="Logo da empresa">
                <img style="display: none;" src="./../../assets/img/logo.png" alt="Logo" title="Logo">
            </a>
        </div>        
        <bs-navegacao></bs-navegacao>
        <b-breadcrumb></b-breadcrumb>
    </header>
</template>

<script>
    import bsNavegacao from './navbar.vue';
    import bBreadcrumb from './breadcrumb.vue';
    
    import imgLogo from '../../assets/img/logo.png';

    export default {
        name: 'meu-header',
        data() {
            return {
                imgLogo: imgLogo
            }
        },
        components: {
            bsNavegacao,
            bBreadcrumb
        }
    }

</script>

<style lang="scss">
    header {
        background-color: rgba(255, 255, 255, 0.9);
        >.row{
            >a#logo{
                margin: 26px auto;
            }
        }
    }
</style>