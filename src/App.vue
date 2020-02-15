<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';
  import Footer from './components/Footer/Footer';

  export default {
    name: 'App',

    components: {
        Header,
        Footer
    }
  };
</script>

<style lang="scss">

</style>
