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
        <div class="pagOutros">
             <div class="paginacao esquerda"></div>
             <span>1 de 10</span>
             <div class="paginacao direita"></div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          img: require("@/assets/produtos/prod03.jpg"),
          price: 204.9,
          colors: ["#A9095E", "#6B85C1", "#A14830", "#000000"]
        },
        {
          img: require("@/assets/produtos/prod04.jpg"),
          price: 204.9,
          colors: ["#A9095E", "#6B85C1", "#A14830", "#000000"]
        },
        {
          img: require("@/assets/produtos/prod02.jpg"),
          price: 204.9,
          colors: []
        },
        {
          img: require("@/assets/produtos/prod01.jpg"),
          price: 204.9,
          colors: ["#6B85C1", "#A14830", "#000000"]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.pagOutros {
    margin: 20px auto;
    width: fit-content;
  & span {
    position: relative;
    top: -14px;
    margin: 0 10px;
    font-size: 14px;
    font-family: Open Sans, sans-serif;
    color: #2a5a75;
  }
}
.paginacao {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.7);
  background-size: 8px 14px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &.direita{
      background-image: url(../assets/setas/setadireita.png);

  }
  &.esquerda{
      background-image: url(../assets/setas/setaesquerda.png);
  }
}
.column.has-text-centered {
  position: relative;
}
.add {
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 20px;
  z-index: 2;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #de8f75;
  background-color: rgba(255, 255, 255, 0.3);
  background-image: url(../assets/plus.png);
  background-position: center;
  background-size: 16px 16px;
  background-repeat: no-repeat;
}
.title {
  color: #de8f75;
  text-transform: uppercase;
}
.outrosCores {
  cursor: pointer;
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
}
</style>
