<template>
    <nav class="nav-container">
        <div class="text-sm-left text-center nav-container-content secondaryFont">
        <router-link to="/registerDialog">Entrar</router-link> |
        <router-link to="/loginDialog">Cadastrar-se</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header_nav_auth"
    }
</script>

<style lang="scss" scoped>
    .nav-container {
        font-size: 12px;
        color: $soft-font-color;
        display: flex;
        align-items: center;
        .nav-container-content {
            color: inherit;
            a {
                line-height: 24px;
                padding: 10px 7px;
                color: $soft-font-color;
            }
        }
    }
</style>
