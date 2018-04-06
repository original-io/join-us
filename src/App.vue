<template>
  <div id="app">
    <original-header></original-header>
    <original-main></original-main>
    <original-suggestions></original-suggestions>
  </div>
</template>

<script>
import originalHeader from './components/header/original-header'
import originalMain from './components/main/original-main'
import originalSuggestions from './components/suggestions/original-suggestions'

export default {
  name: 'App',
  components: {
    originalHeader, originalMain, originalSuggestions
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
