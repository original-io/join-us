<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-close" @click="closeModal">X</div>
      <div class="modal-img">
        <img :src="imgSrc">
      </div>
      <span>Adicionado com sucesso !</span>
      <button @click="closeModal">Finalizar compra</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'original-modal',
  props: ['imgSrc'],
  methods: {
    closeModal () {
      this.$el.style.display = 'none'
    }
  }
}
</script>

<style scoped>
img {
  position: relative;
  width: 220px;
  height: auto;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  border: 1px solid gray;
  padding: 20px;
}
span {
  position: relative;
  left: 60px;
  bottom: -70px;
  text-transform: uppercase;
  color: tomato;
  font-weight: 700;
}
button {
  position: absolute;
  outline-style: none;
  border: none;
  padding: 10px;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  cursor: pointer;
  widows: 220px;
  background: #009688;
  color: #FFF;
  text-transform: uppercase;
}
.modal {
  display: none;
  position: fixed;
  background: rgba(0,0,0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.modal-dialog {
  position: relative;
  height: 450px;
  width: 350px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid gray;
  background: white;
  box-sizing: border-box;
}
.modal-close {
  position: absolute;
  font-size: 18px;
  right: 5px;
  color:skyblue;
  cursor: pointer;
}
</style>
