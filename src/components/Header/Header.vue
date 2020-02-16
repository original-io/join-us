<template>
  <header class="block-header">
    <router-link to="/">
      <div id="headerTopBlock" ref="brandLogoContainer" class="flexCenter">
        <!-- Pode ser configurada em .env, basta mudar as variáveis 'brandlogo' -->
      </div>
    </router-link>
    <header_nav></header_nav>
  </header>
</template>

<script>
import Header_nav from '@/components/Header/Header_nav';

export default {
  name: 'Header',
  components: {
      Header_nav
  },
  mounted() {
      this.$nextTick(() => {
          this.$refs.brandLogoContainer.innerHTML = process.env.VUE_APP_BRANDLOGOFILECODE;
      })
  }
}
</script>

<style lang="scss" scoped>
  .block-header {
    display:flex;
    flex-direction: column;
  }

  #headerTopBlock {
    @include flexCenter(row);
    padding: 30px 0;
    border-bottom: 1px solid $dividers-color;
  }

  #brandLogoImg {
    width: auto;
    height: 34px;
  }
</style>
