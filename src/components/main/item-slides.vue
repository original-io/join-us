<template>
  <div class="slides">
    <button @click="slideUp"><i class="icon fas fa-arrow-up"></i></button>
    <div ref="slide">
      <img class="selected" src="../../../static/benassi1.jpg" @click="selectedSlide">
      <img class="image" src="../../../static/benassi2.jpg" @click="selectedSlide">
      <img class="image" src="../../../static/benassi3.jpg" @click="selectedSlide">
      <img class="image" src="../../../static/benassi4.jpg" @click="selectedSlide">
    </div>
    <button @click="slideDown"><i class="icon fas fa-arrow-down"></i></button>
  </div>
</template>

<script>
export default {
  name: 'item-slides',
  data () {
    return {

    }
  },
  methods: {
    selectedSlide (event) {
      this.selectedClear()
      event.target.className = 'selected'
      this.$emit('src', event.target.getAttribute('src'))
    },
    slideUp (event) {
      let childrenIndexLenght = this.$refs.slide.children.length - 1
      let index = 0
      while (index <= childrenIndexLenght) {
        if (this.$refs.slide.children[index].className === 'selected') {
          if (index === 0) break
          this.selectedClear()
          this.$emit('src', this.$refs.slide.children[index - 1].getAttribute('src'))
          this.$refs.slide.children[index - 1].className = 'selected'
          break
        }
        index++
      }
    },
    slideDown (event) {
      let childrenIndexLenght = this.$refs.slide.children.length - 1
      let index = 0
      while (index <= childrenIndexLenght) {
        if (this.$refs.slide.children[index].className === 'selected') {
          if (index === this.$refs.slide.children.length - 1) break
          this.selectedClear()
          this.$emit('src', this.$refs.slide.children[index + 1].getAttribute('src'))
          this.$refs.slide.children[index + 1].className = 'selected'
          break
        }
        index++
      }
    },
    selectedClear () {
      for (const img of this.$refs.slide.children) {
        img.className = 'image'
      }
    }
  }
}
</script>

<style scoped>
  button {
    background: none;
    outline-style: none;
    border: none;
    transition: 0.4s;
  }
  button:hover {
    color: gray;
  }
  .image {
    height: auto;
    width: 150px;
    border:1px solid rgba(0,0,0, 0.2);
    opacity: 0.7;
  }
  .selected {
    height: auto;
    width: 150px;
    border:1px solid #000;
  }
  .icon {
    cursor: pointer;
  }
  .slides {
    display: none;
    width: 150px;
    padding: 10px;
    text-align: center;
  }
  @media (min-width: 650px){
    .slides{
      display: inline-block;
    }
  }
</style>
