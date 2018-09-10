<template>
    <div > 
            <div class="centered">
                <span class="font">Video</span>
            </div>
            <div class="centered">
                <img src="@/assets/svg/icon-play-circle.svg">
            </div>
            <div class="centered m-b-md">
                <img src="@/assets/seta.png">
            </div>
            <div class="centered">
                <img  height="90" width="70" v-for="index in 4" :key="index" src="../assets/sandalias.png" alt="Rasteira Tira Dedo" >
            </div>
            <div class="centered m-t-md flipY">
                <img src="@/assets/seta.png">
            </div>    
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.centered{
    text-align: center;
    & .font{
      font-size: 12px;
      color: #de8f75;
    }
    &.flipY{
        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        filter: FlipH;
        -ms-filter: "FlipH"
    }
}

</style>