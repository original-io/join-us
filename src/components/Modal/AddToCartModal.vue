<template>
    <b-modal class="modal" id="modal-add-cart" hide-footer hide-header>
        <div class="custom-modal-header">
            <img src="@/assets/svg/Xmodal.svg" @click="$bvModal.hide('modal-add-cart')">
        </div>
        <div class="d-block text-center custom-modal-body">
            <img v-bind:src="img.src">
            <div class="body-text">ADICIONADO COM SUCESSO!</div>
        </div>
        <div class="custom-modal-footer">
            <div class="end" @click="$bvModal.hide('modal-add-cart')">FINALIZAR COMPRA</div>
            <div class="keep" @click="$bvModal.hide('modal-add-cart')">Continuar Comprando</div>
        </div>
    </b-modal>
</template>

<script>
    export default {
        name: "addToCartModal",
        props: [
            'img'
        ]
    }
</script>

<style lang="scss" scoped>
    .custom-modal-header{
        display: flex;
        justify-content: flex-end;
    }
    .custom-modal-body{
        img{
            width: 290px;
            height: 373px;
        }
    }
    .custom-modal-footer{
        margin: auto;
        max-width: 290px;
    }
    .end{
        display: flex;
        background-color: $actionable-color;
        font-family: $secondary-font;
        font-size: 14px;
        color: $main-darkbg-font-color;
        height: 50px;
        flex: 1;
        align-items: center;
        justify-content: center;
        margin: auto;
        border-radius: 3px;
        cursor: pointer;
    }
    .keep{
        text-align: center;
        font-family: $primary-font;
        font-size: 14px;
        color: $faded-font-color;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 10px;
    }
    .body-text{
        margin: auto;
        max-width: 290px;
        text-align: left;
        font-family: $primary-font;
        font-weight: bold;
        font-size: 22px;
        color: $primary-color;
    }
</style>