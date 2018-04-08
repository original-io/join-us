<template>
  <div class="info">
    <h1>Chinelo Nike Benassi</h1>
    <p>RT 0568 | 03.07.0653</p>
    <div class="price">
      <div class="oldvalue">R$ 69,00</div>
      <div class="newvalue">R$ 55,20</div>
      <div class="creditcard">Ou 6x de R$9,20</div>
    </div>
      <div class="palette">
        Cor: ({{ colorSelected }})
        <ul class="color-container">
          <li class="color-box" v-for="color in palette" :key="color.name"
            @click="handlerClick(color.name)"
            :style="{background: color.hex}">
            <div class="color-selected" v-show="color.name === colorSelected"></div>
          </li>
        </ul>
      </div>

      <div class="size">
        Tamanho: ({{ sizeSelected }})
        <ul class="size-container">
          <li class="size-box" v-for="num in size" :key="num"
            @click="selectedNum(num)">
            {{ num }}
            <div class="size-selected" v-show="num === sizeSelected"></div>
          </li>
        </ul>
      </div>
      <button class="buttoncompra" @click="addToCart">Adicionar à sacola</button>
      <p class="description">Feito com material espuma Solarsoft, o Chinelo Nike Benassi Solarsoft Slide 2 – Adulto é a opção ideal para quem deseja calçar algo confortável nas horas de lazer ou descanso. Desenvolvido com a qualidade Nike, o chinelo possui tira larga e confortável, com acolchoamento e camada em “mesh”. Não perca!</p>

  </div>
</template>

<script>
export default {
  name: 'item-info',
  data () {
    return {
      colorSelected: 'Black Olive',
      sizeSelected: 37,
      palette: [
        { hex: '#4D4D4D', name: 'Black Olive' },
        { hex: '#95B8D1', name: 'Dark Sky' },
        { hex: '#809BCE', name: 'Pastel Blue' },
        { hex: '#F87247', name: 'Orange' }
      ],
      size: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
    }
  },
  methods: {
    addToCart (event) {
      this.$emit('addToCart')
    },
    handlerClick (color) {
      this.colorSelected = color
    },
    selectedNum (num) {
      this.sizeSelected = num
    }
  }
}
</script>

<style scoped>
h1, p {
  margin: 0;
  padding: 0;
}
button {
  outline-style: none;
  border: none;
  cursor: pointer;
}
.info {
  padding: 15px;
  border: 2px solid gray;
}
.price {
  margin: 15px 0px;
}
.newvalue {
  display: inline;
  font-size: 1.2em;
  font-weight: 700;
  color: gray;
}
.creditcard {
  font-size: 0.8em;
  font-weight: 700;
  color: gray;
}
.oldvalue {
  display: inline;
  color: tomato;
  text-decoration: line-through;
  font-size: 0.8em;
}
.palette {
  margin-top: 50px;
  margin-bottom: 50px;
}
.color-container, .size-container {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.color-box, .size-box {
  list-style: none;
  width: 30px;
  height: 30px;
  float: left;
  margin: 5px;
  position: relative;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: inset 0 0 0 1px #333;
}
.color-selected::after {
  content: '';
  z-index: -1;
  position: absolute;
  top: -4px;
  left: -4px;
  height: 35px;
  width: 35px;
  background-color: #CFE4CE;
  border: 1px solid #CFE4CE;
  border-radius: 35px;
}
.size-box {
  text-align: center;
  line-height: 30px;
  color: #95B8D1;
  font-weight: 700;
  background-color: #ECECEC;
}
.size-selected::after {
  content: '';
  position: absolute;
  top: -0.1px;
  left: -0.1px;
  height: 30px;
  width: 30px;
  background-color: rgba(187,217,185, 0.6);
  border-radius: 35px;
}
.buttoncompra {
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  background-color: #009688;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  transition: 0.4s;
}
.buttoncompra:hover{
  background-color: #00897B;
}
.buttoncompra:active{
  box-shadow: inset 0 0 0 1px #333;
}
.description {
  margin-top: 20px;
  text-align: justify
}
</style>
