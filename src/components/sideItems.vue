<template>
    <div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li class="sideItems">
                    <a href="">Home</a>
                </li>  
                <li class="sideItems">
                    <a href="">Sapatos</a>
                </li>
            </ul>
        </nav>
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