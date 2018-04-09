<template>
  <div class="slides">
    <button @click="slideLeft" class="slidebtn icon-left"><i class="fas fa-arrow-left"></i></button>
    <div ref="suggestionSlide" class="slide">

      <div class="wrap selected" @click="selectSlide">
        <img src="../../../static/suggestion1.jpg">
        <button class="additem" @click="addToCart">+</button>
      </div>

      <div class="wrap image" @click="selectSlide">
        <img src="../../../static/suggestion2.jpg">
        <button class="additem" @click="addToCart">+</button>
      </div>

      <div class="wrap image" @click="selectSlide">
        <img src="../../../static/suggestion3.jpg">
        <button class="additem" @click="addToCart">+</button>
      </div>

      <div class="wrap image" @click="selectSlide">
        <img src="../../../static/suggestion4.jpg">
        <button class="additem" @click="addToCart">+</button>
      </div>

    </div>
    <button @click="slideRight" class="slidebtn icon-right"><i class="fas fa-arrow-right"></i></button>
    <div class="suggestioncount">{{ suggestionCount }}</div>
  </div>
</template>

<script>
export default {
  name: 'suggestions-slides',
  data () {
    return {
      mounted: false,
      selected: 1
    }
  },
  methods: {
    addToCart (event) {
      const src = event.target.parentElement.children[0].getAttribute('src') // Pega o primeiro filho do elemento pai(wrap)
      this.$emit('addToCart', src)
    },
    getSelectedIndex () {
      const items = this.$refs.suggestionSlide.children
      const childrenIndexLenght = items.length - 1
      for (let index = 0; index <= childrenIndexLenght; index++) {
        if (items[index].className.includes('selected')) {
          return index
        }
      }
    },
    selectedClear () {
      for (const img of this.$refs.suggestionSlide.children) {
        img.className = 'image'
      }
    },
    selectSlide (event) {
      this.selectedClear()
      event.target.parentElement.className = 'selected'
      const selectedIndex = this.getSelectedIndex()
      this.selected = selectedIndex + 1
    },
    slideLeft (event) {
      const selectedIndex = this.getSelectedIndex()
      if (selectedIndex !== 0) {
        this.selectedClear()
        this.$refs.suggestionSlide.children[selectedIndex - 1].className = 'selected'
        this.selected = selectedIndex
      }
    },
    slideRight (event) {
      const selectedIndex = this.getSelectedIndex()
      if (selectedIndex !== this.$refs.suggestionSlide.children.length - 1) {
        this.selectedClear()
        this.$refs.suggestionSlide.children[selectedIndex + 1].className = 'selected'
        this.selected = selectedIndex + 2
      }
    }
  },
  computed: {
    suggestionCount (e) {
      if (this.mounted) {
        const items = this.$refs.suggestionSlide.children
        const total = items.length
        return `${this.selected} de ${total}`
      }
    }
  },
  mounted () {
    this.mounted = true
  }
}
</script>

<style scoped>
  img {
    display: inline-block;
    width: 150px;
    height:150px;
  }
  .slidebtn {
    border: 1px solid #1976d2;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    color: #1976d2;
    background: none;
    outline-style: none;
    transition: 0.4s;
  }
  .slidebtn:hover {
    color: #0d47a1;
    background: #e3f2fd;
  }
  .wrap {
    position: relative;
    border: none;
  }
  .additem {
    position: absolute;
    top: 5px;
    right: 2px;
    height: 30px;
    width: 30px;
    border: 1px solid tomato;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    color: tomato;
    transition: 0.5s;
  }
  .additem:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 1);
  }
  .image {
    display: none;
    position: relative;
    height: 150px;
    width: 150px;
    border:1px solid rgba(0,0,0, 0.2);
    opacity: 0.7;
  }
  .selected {
    display: inline-block;
    position: relative;
    height: 150px;
    width: 150px;
    border: 1px solid #000;
  }
  .icon-left, .icon-right {
    cursor: pointer;
    align-self: center;
    justify-self: center;
  }
  .slides {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
  }
  .suggestioncount{
    display:none;
    color: #1976d2;
  }
  @media(min-width: 560px){
    .slides {
      grid-template-columns: 20px 1fr 20px;
      column-span: 10px;
      grid-template-rows: 1fr;
      justify-content: center;
    }
    .slide {
      justify-self: center;
      align-self: center;
    }
    .image {
      display: inline-block;
    }
  }
  @media(min-width: 800px){
    .suggestioncount{
      justify-self: center;
      align-self: center;
      display: inline;
      grid-area: suggestioncount
    }
    .icon-left{
      justify-self: end;
      grid-area: leftIcon
    }
    .icon-right{
      justify-self: start;
      grid-area: rightIcon
    }
    .slide{
      grid-area: slide
    }
    .slides{
      grid-template-columns: 1fr auto 1fr;
      grid-column-gap: 20px;
      grid-template-areas:
      'slide slide slide'
      'leftIcon suggestioncount rightIcon'
    }
  }
</style>
