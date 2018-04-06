<template>
  <main class="container">
    <item-route :route="route" class="route"></item-route>
    <item-slides class="slide" @src="imageSrc"></item-slides>
    <image-selected class="imageselected" :imageSelected="imageSelected"></image-selected>
    <item-info class="info"></item-info>
  </main>
</template>

<script>
import itemRoute from './item-route'
import itemSlides from './item-slides'
import imageSelected from './image-selected'
import itemInfo from './item-info'

export default {
  name: 'original-main',
  components: { itemInfo, imageSelected, itemRoute, itemSlides },
  data () {
    return {
      route: 'Home / Sapatos',
      imageSelected: '/static/img/benassi1.f6123fc.jpg'
    }
  },
  methods: {
    imageSrc (imageSrc) {
      this.imageSelected = imageSrc
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-areas:
    'route route route'
    'slide imageselected info'
  }
  .route {
    grid-area: route
  }
  .slide {
    grid-area: slide
  }
  .imageselected {
    align-self: center;
    grid-area: imageselected
  }
  .info {
    margin: 10px;
    grid-area: info
  }
</style>
