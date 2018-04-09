<template>
  <div>
    <div class="title">Quem viu viu também</div>
    <suggestion-slides @addToCart="addToCart"></suggestion-slides>
  </div>
</template>

<script>
import suggestionSlides from './suggestion-slides'
export default {
  name: 'original-suggestions',
  components: { suggestionSlides },
  methods: {
    addToCart (imgSrc) {
      this.$emit('addToCart', imgSrc)
    }
  }
}
</script>

<style scoped>
  .title {
    margin: 10px;
    font-size: 1.4em;
    font-weight: 600;
    text-transform: uppercase;
    color: tomato;
    text-align: center;
  }
  @media(min-width: 1200px) {
    .title{
      margin: 50px;
    }
  }
</style>
