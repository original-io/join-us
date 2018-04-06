<template>
  <div class="aboutus">
    <div class="social">
      <a href="https://www.facebook.com" target="_blank">
        <i class="icon fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <i class="icon fab fa-instagram"></i>
      </a>
      <a href="https://www.pinterest.com" target="_blank">
        <i class="icon fab fa-pinterest"></i>
      </a>
    </div>

    <div class="info">
      <div class="info-item">
        <div class="info-title">Institucional</div>
        <div class="info-prop">A marca</div>
        <div class="info-prop">Lojas</div>
        <div class="info-prop">Contato</div>
      </div>

      <div class="info-item">
        <div class="info-title">Informações</div>
        <div class="info-prop">Formas de pagamento</div>
        <div class="info-prop">Trocas e devoluções</div>
        <div class="info-prop">Cuidados com o produto</div>
      </div>

      <div class="info-item">
        <div class="info-title">Conheça</div>
        <div class="info-prop">Franquias e multimarcas</div>
        <div class="info-prop">Trabalhe com a gente</div>
        <div class="info-prop">Procon-RJ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-about-us'
}
</script>

<style scoped>
.aboutus {
  padding: 10px;
  text-transform: uppercase;
}
.icon {
  margin-left: 8px;
  font-size: 30px;
  color: tomato;
  opacity:0.5;
  transition: 0.3s;
}
.icon:hover {
  opacity: 1;
}
.info {
  font-size: 14px;
  margin-top: 15px;
}
.info-title {
  cursor: pointer;
  color: gray;
  font-weight: 800;
}
.info-prop {
  display: none;
  transition: 0.5s;
}
.info-prop:hover {
  font-weight: 600;
  color: gray;
}
@media(min-width: 460px){
  .info-title {
    cursor: default;
    position: relative;
    left: 5px;
  }
  .info-prop {
    display: block;
    cursor: pointer;
  }
}
@media(min-width: 1000px){
  .info {
    width: 400px;
    position: relative;
    left: 120px;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .info-title {
    cursor: default;
    position: relative;
    left: 5px;
  }
  .info-prop {
    cursor: pointer;
  }
}
</style>
