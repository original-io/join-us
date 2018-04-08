<template>
  <div class="slides">
    <button @click="slideLeft" class="icon-left"><i class="fas fa-arrow-left"></i></button>
    <div ref="suggestionSlide" class="slide">

      <suggestion-image class="selected " imageSrc="../../../static/suggestion1.jpg" @click.native="selectSlide"></suggestion-image>

      <suggestion-image class="image" imageSrc="../../../static/suggestion2.jpg" @click.native="selectSlide"></suggestion-image>

      <suggestion-image class="image" imageSrc="../../../static/suggestion3.jpg" @click.native="selectSlide"></suggestion-image>

      <suggestion-image class="image" imageSrc="../../../static/suggestion4.jpg" @click.native="selectSlide"></suggestion-image>

    </div>
    <button @click="slideRight" class="icon-right"><i class="fas fa-arrow-right"></i></button>
    <div class="suggestioncount">{{ suggestionCount }}</div>
  </div>
</template>

<script>
import suggestionImage from './suggestion-image'

export default {
  name: 'suggestions-slides',
  components: { suggestionImage },
  data () {
    return {
      mounted: false,
      selected: 1
    }
  },
  methods: {
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
      console.log(event.target)
      event.target.className = 'selected'
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
  button {
    border: 1px solid #1976d2;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    color: #1976d2;
    background: none;
    outline-style: none;
    transition: 0.4s;
  }
  button:hover {
    color: #0d47a1;
    background: #e3f2fd;
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
    position: relative;
    height: 150px;
    width: 150px;
    border:1px solid #000;
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
      display: inline;
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
