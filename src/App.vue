<template>
  <div id="app">
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
  name: 'app',
  components: {
    meuHeader,
    meuConteudo,
    meuFooter
  },
  data () {
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
}
</style>
