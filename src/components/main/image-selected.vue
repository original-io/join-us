<template>
  <div>
    <img class="imageSelected" :src="imageSelected">
  </div>
</template>

<script>
export default {
  name: 'image-selected',
  props: ['imageSelected']
}
</script>

<style scoped>
  .imageSelected {
    width: 300px;
  }
</style>
