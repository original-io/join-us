<template>
    <div>
        <div class="has-text-centered title">QUEM VIU VIU TAMBÉM</div>
        <div class="columns">
            <template v-for="(item, index) in items" class="column card has-text-centered">
                <div :key="index" class="column has-text-centered">
                    <div class="add"></div>
                    <div id="imgOutros" class="is-paddingless">
                        <img width = "100%" height= "100%" :src="item.img" >
                    </div>
                    <div class="card-content is-paddingless">
                        <div class="content">
                            <div class="columns">
                                <div class="column  has-text-left">
                                    <span>{{"R$"+item.price.toLocaleString()}}</span>
                                </div>
                                <div class="column has-text-right">
                                    <div class="outrosCores m-xs" :style="{backgroundColor: cor}" v-for="cor in item.colors" :key="cor"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
            items: [
                {
                    img: require("@/assets/prod03.jpg"),
                    price: 204.90,
                    colors: ["#A9095E", "#6B85C1", "#A14830", "#000000"]
                },
                {
                    img: require("@/assets/prod04.jpg"),
                    price: 204.90,
                    colors:  ["#A9095E", "#6B85C1", "#A14830", "#000000"]
                },
                { 
                    img: require("@/assets/prod02.jpg"),
                    price: 204.90,
                    colors: [] 
                },
                {
                    img: require("@/assets/prod01.jpg"),
                    price: 204.90,
                    colors: ["#6B85C1", "#A14830", "#000000"]         
               }
            ]
            }
        }
              
    }
</script>

<style scoped lang="scss">
.column.has-text-centered{
        position: relative;
}
.add{
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 20px;
    z-index: 2;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #DE8F75;
    background-color: rgba(255, 255, 255, 0.3);
    background-image: url(../assets/plus.png);
    background-position: center;
    background-size: 16px 16px;
    background-repeat: no-repeat;
}
.title{
    color: #DE8F75;
    text-transform: uppercase;
}
.outrosCores{
    cursor: pointer;
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
}
</style>
