<template>
    <div>

         <img height="100" width="80" v-for="index in 5" :key="index" src="../assets/sandalias.png" alt="Rasteira Tira Dedo">
        
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.breadcrumb a {
  color: #aeb6c1;
}
.sideItems {
  font-size: 12px;
}
</style>