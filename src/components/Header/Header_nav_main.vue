<template>
    <nav>
        <router-link to="/produtos/categorias/sapatos">SAPATOS</router-link>
        <router-link to="/produtos/categorias/bolsas">BOLSAS</router-link>
        <router-link to="/produtos/categorias/acessorios">ACESSÓRIOS</router-link>
        <router-link to="/produtos/categorias/off">OFF</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Header_nav_main"
    }
</script>

<style lang="scss" scoped>

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        a {
            color: $soft-font-color;
            padding: 0 25px;
            font-size: 14px;
        }
    }

</style>
