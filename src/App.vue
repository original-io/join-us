<template>
  <div id="app">
    <modal ref="modal" :imgSrc="imgSrc"></modal>
    <original-header :cartItens="cartItens"></original-header>
    <original-main @addToCart="openModal"></original-main>
    <original-suggestions></original-suggestions>
    <original-footer></original-footer>
  </div>
</template>

<script>
import originalHeader from './components/header/original-header'
import originalMain from './components/main/original-main'
import originalSuggestions from './components/suggestions/original-suggestions'
import originalFooter from './components/footer/original-footer'
import modal from './components/modal'

export default {
  name: 'App',
  components: {
    originalHeader, originalMain, originalSuggestions, originalFooter, modal
  },
  data () {
    return {
      imgSrc: '',
      cartItens: 0
    }
  },
  methods: {
    openModal (imgSrc) {
      this.cartItens++
      this.imgSrc = imgSrc
      this.$refs.modal.$el.style.display = 'block'
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>
