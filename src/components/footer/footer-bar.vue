<template>
  <div class="footerbar">
    <p>Prefeitura da Cidade do Rio de Janeiro<br> Rua Professor Lacé, 57 - Ramos, Rio de Janeiro - RJ, 21060-120<br>CNPJ: 16.227.667/0001-61 (Gerado com http://www.geradorcnpj.com/)</p>
  </div>
</template>

<script>
export default {
  name: 'footer-bar'
}
</script>

<style scoped>
  .footerbar{
    position: absolute;
    width: 100%;
    background: tomato;
    color: white;
    font-size: 12px;
    bottom: 0px;
    box-sizing: border-box;
  }
  @media(min-width: 560px){
    .footerbar{
      height: 80px;
      font-weight: 700;
      padding: 0px 30px;
    }
  }
</style>
