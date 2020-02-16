<template>
    <nav class="navContainer">
        <router-link class="mainLink" to="/produtos/categorias/sapatos">SAPATOS</router-link>
        <router-link class="mainLink" to="/produtos/categorias/bolsas">BOLSAS</router-link>
        <router-link class="mainLink" to="/produtos/categorias/acessorios">ACESSÓRIOS</router-link>
        <router-link class="mainLink" to="/produtos/categorias/off">OFF</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Header_nav_main"
    }
</script>

<style lang="scss" scoped>

    .navContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .mainLink {
            color: $soft-font-color;
            padding: 10px 25px;
            font-size: 14px;
            transition: all 0.5s ease;
            &:hover {
                transform: scale(1.04);
            }
        }
    }

</style>
