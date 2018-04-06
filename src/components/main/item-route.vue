<template>
  <div class="route">
   {{ route }}
  </div>
</template>

<script>
export default {
  name: 'item-route',
  props: ['route'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .route{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: 10px;
    font-weight: 600;
    color: gray;
  }
</style>
