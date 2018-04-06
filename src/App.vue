<template>
  <div id="app">
    <original-header></original-header>
    <original-main></original-main>
  </div>
</template>

<script>
import originalHeader from './components/header/original-header'
import originalMain from './components/main/original-main'

export default {
  name: 'App',
  components: {
    originalHeader, originalMain
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
