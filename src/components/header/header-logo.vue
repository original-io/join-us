<template>
  <header class="testheader">
    <img src="../../../static/logo.png">
    <img class="testheader-logoespelhada" src="../../../static/logo.png">
  </header>
</template>

<script>
export default {
  name: 'header-logo'
}
</script>

<style scoped>
  .testheader {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: tomato;
    box-sizing: border-box;
  }
  .testheader-logoespelhada {
    display: none;
    transform: scale(0.6) translateX(200px);
    opacity: 0.1;
  }
  @media (min-width: 650px) {
    .testheader-logoespelhada {
      display: block;
    }
  }
</style>
