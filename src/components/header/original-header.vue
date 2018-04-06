<template>
  <div>
    <header-logo></header-logo>
    <header-nav></header-nav>
  </div>
</template>

<script>
import headerLogo from './header-logo'
import headerNav from './header-nav'

export default {
  name: 'original-header',
  components: { headerLogo, headerNav }
}
</script>

<style scoped>

</style>
