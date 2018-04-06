<template>
  <div id="app">
    <original-header></original-header>
    <original-main></original-main>
    <original-suggestions></original-suggestions>
    <original-footer></original-footer>
  </div>
</template>

<script>
import originalHeader from './components/header/original-header'
import originalMain from './components/main/original-main'
import originalSuggestions from './components/suggestions/original-suggestions'
import originalFooter from './components/footer/original-footer'

export default {
  name: 'App',
  components: {
    originalHeader, originalMain, originalSuggestions, originalFooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
