<template>
  <div>
    <header-logo></header-logo>
    <header-nav :cartItens="cartItens"></header-nav>
  </div>
</template>

<script>
import headerLogo from './header-logo'
import headerNav from './header-nav'

export default {
  name: 'original-header',
  components: { headerLogo, headerNav },
  props: ['cartItens']
}
</script>

<style scoped>

</style>
