<template>
  <footer class="footer">
    <about-us></about-us>
    <newsletter></newsletter>
    <footer-bar></footer-bar>
  </footer>
</template>

<script>
import aboutUs from './footer-about-us'
import newsletter from './footer-newsletter'
import footerBar from './footer-bar'

export default {
  name: 'original-footer',
  components: {
    aboutUs, newsletter, footerBar
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .footer {
    position: relative;
    margin-top: 100px;
    border-top: 1px solid gray;
    height: 400px;
  }
</style>
