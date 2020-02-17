<template>
    <b-collapse id="collapse-1" v-model="visible" v-if="query">
        <div class="title">
            {{query}}
        </div>
        <div class="results">
            <vuescroll :ops="ops">
                <router-link :to="`/produtos/${product.id}`" class="results-cards" v-for="product in result">
                    <img class="img-card" v-bind:src="require(`@/assets/svg/${product.foto}`)">{{product.nome}}
                </router-link>
            </vuescroll>
        </div>
    </b-collapse>
</template>

<script>
    import vuescroll from 'vuescroll';
    export default {
        name: "Header_nav_search",
        components: {
            vuescroll
        },
        props: [
            'query',
            'result',
            'visible'
        ],
        data(){
            return{
                ops: {
                    bar: {
                        keepShow: true,
                        background: '#C4C4C4',
                        size: '5px'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #collapse-1{
        background-color: $main-darkbg-font-color;
        z-index: 99;
        position: absolute;
        margin-top: 25px;
        right: 10px;
        width: 290px;
        height: 429px;
        max-height: 60vh;
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        box-shadow: 2px 5px 8px #888888;
        padding: 10px;
    }
    #collapse-1::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 12%;
        box-sizing: border-box;
        border: 8px solid;
        border-color: transparent transparent $main-darkbg-font-color $main-darkbg-font-color;
        transform-origin: 0 0;
        transform: rotate(135deg);
        box-shadow: -3px 3px 3px 0 #EEEEEE;
    }
    .results{
        flex: 1;
        overflow-y:auto;
        text-align: left;
        border-style: solid none none none;
        border-width: 1px;
        border-color: $dividers-color;
    }
    .results-cards{
        height: 76px;
        margin: auto;
        margin-top: 17px;
        font-family: $secondary-font;
        font-size: 14px;
        color: $main-font-color;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .title{
        text-align: left;
        height: 31px;
        display: flex;
        align-items: center;
        justify-content: left;
        font-family: $primary-font;
        font-size: 14px;
        color: $main-font-color;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .img-card{
        width: 59px;
        height: 76px;
        margin-right: 13px;
    }
</style>
