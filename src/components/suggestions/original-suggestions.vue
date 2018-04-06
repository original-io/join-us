<template>
  <div>
    <div class="title">Quem viu viu também</div>
    <suggestion-slides></suggestion-slides>
  </div>
</template>

<script>
import suggestionSlides from './suggestion-slides'
export default {
  name: 'original-suggestions',
  components: { suggestionSlides }
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
