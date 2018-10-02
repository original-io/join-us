<template lang="pug">
  div
    Header
    hr
    router-view
    hr
    Footer
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="sass">

</style>
