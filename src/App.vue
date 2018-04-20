<template>
    <div id="app" class="container">
        <meu-header></meu-header>
        <meu-conteudo></meu-conteudo>
        <meu-footer></meu-footer>
    </div>    
</template>

<script>
    import meuHeader from './components/header/header.vue';
    import meuConteudo from './components/content/content.vue';
    import meuFooter from './components/footer/footer.vue';

    export default {
        components: {
            meuHeader,
            meuConteudo,
            meuFooter
        },
        data() {
            return {
                //msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        background-color: #FFE8E8;
        color: #202020;
        font-family: Open Sans;
        > .container {
            max-width: 1280px;
        }
    }
</style>
