<template>
    <b-collapse id="collapse-1" v-model="visible" v-if="busca">
        <div class="title">
            {{busca || "Insira sua busca"}}
        </div>
        <div class="results">
            <div class="results-cards" v-for="produto in resultado"><img class="img-card" v-bind:src="produto.foto"> {{produto.nome}}</div>
        </div>
    </b-collapse>
</template>

<script>
    export default {
        name: "Header_nav_search",
        props: [
            'busca',
            'resultado',
            'visible'
        ]
    }
</script>

<style lang="scss" scoped>
    #collapse-1{
        background-color: #FFFFFF;
        z-index: 99;
        position: absolute;
        top: 40px;
        right: 10px;
        width: 290px;
        height: 429px;
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        box-shadow: 2px 5px 8px #888888;
    }
    .results{
        flex: 1;
        overflow-y:auto;
        text-align: left;
        border-style: solid none none none;
        border-width: 1px;
        border-color: #E5E5E5;
    }
    .results-cards{
        height: 76px;
        margin: auto;
        font-family: "Open Sans";
        font-size: 14px;
        color: #202020;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .title{
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: left;
        font-family: "Gotham Bold";
        font-size: 16px;
        height: 31px;
        color: #202020;
        font-weight: bold;
    }
    .img-card{
        width: 59px;
        height: 76px;
    }
</style>
