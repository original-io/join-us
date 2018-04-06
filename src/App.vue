<template>
  <div id="app">
    <original-header></original-header>
  </div>
</template>

<script>
import originalHeader from './components/header/original-header'

export default {
  name: 'App',
  components: { originalHeader }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
