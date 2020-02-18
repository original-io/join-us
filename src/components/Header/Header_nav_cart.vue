<template>
    <b-collapse v-model="visible" @open="openCart()" id="collapse-2">
        <div class="label">
            <p class="label-product">Produto</p>
            <p class="label-quantity">Quantidade</p>
        </div>
        <div class="cart" v-on:updatecart="updateCart">
            <vuescroll :ops="ops">
                <div class="cart-cards" v-for="product in content">
                    <div class="product">
                        <div class="img-container">
                            <img class="img-card" v-bind:src="require(`@/assets/svg/${product.pic}`)">
                        </div>
                        <div class="product-info-container">
                            <p class="name">{{product.name}}</p>
                            <p class="price">R${{product.price}}</p>
                        </div>
                    </div>
                    <div class="quantity">
                        <div class="quantity-button subtract-button" v-on:click="subtractProduct(product.id)">
                            <img src="../../assets/svg/subtract.svg">
                        </div>
                        <div class="quantity-number">
                            <p v-bind:id="`p${product.id}`">{{product.qtd}}</p>
                        </div>
                        <div class="quantity-button add-button" v-on:click="addProduct(product.id)">
                            <img src="../../assets/svg/plus.svg">
                        </div>
                    </div>
                    <div class="remove-btn" v-on:click="removeProduct(product.id, $event)">
                        <img src="../../assets/svg/X.svg">
                    </div>
                </div>
            </vuescroll>
        </div>
        <div class="shipping">
            Faltam R$xx,xx para você Ganhar Frete Grátis
        </div>
        <div class="buy">
            <div class="total-price">
                <p class="total">Total: R${{totalPrice}}</p>
                <p class="parcel">até 3x de R${{(totalPrice/3).toFixed(2)}} sem juros</p>
            </div>
            <div class="button-container">
                <p>FINALIZAR COMPRA</p>
            </div>
        </div>
    </b-collapse>
</template>

<script>
    import axios from 'axios';
    import vuescroll from 'vuescroll';
    import Aux from '@/assets/auxscripts/auxscripts.js';

    export default {
        name: "Header_nav_cart",
        components: {
            vuescroll
        },
        data() {
            return{
                content: [],
                totalPrice: 0,
                ops: {
                    bar: {
                        keepShow: true,
                        background: '#DE8F75',
                        size: '5px'
                    },
                    rail: {
                        background: '#E2E2E2',
                        opacity: 1
                    }
                },
                visible: false
            }
        },
        methods:{
            subtractProduct: async function(id){
                let { data } = await axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + "usuario/carrinho/subtrair/" + id);
                if(data > 0) {
                    document.getElementById("p" + id).innerText = data;
                } else {
                    this.content.splice(this.content.findIndex(prod => prod.id == id), 1);
                }
                this.updateCart();
                return data;
            },
            addProduct: async function(id){
                await axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + "usuario/carrinho/adicionar/" + id)
                        .then(data =>{
                            document.getElementById("p" + id).innerText = data.data;
                        }).catch(err =>{
                            console.log(err)
                        });
                this.updateCart();
            },
            removeProduct: async function(id, event) {
                event.target.disabled = true;
                await axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + "usuario/carrinho/removerProduto/" + id);
                this.updateCart();
            },
            updateCart: async function(){
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + "usuario/carrinho");

                if(data) {
                    data.forEach(async result => {
                        if(result) {
                            await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + "produtos/id/" + result.id)
                                    .then(res => {
                                        result.price = res.data.valorPromocao;
                                        result.name = res.data.nome;
                                        result.pic = res.data.foto;
                                    }).catch(err => {
                                        console.log(err);
                                    });

                            if (!this.content.some((prod) => prod.id == result.id)) {
                                this.content.push(result);
                            } else {
                                this.content.find((prod) => prod.id == result.id).qtd = result.qtd;
                            }
                            this.updateTotalPrice();
                        }
                    });

                    let currentProducts = this.content.slice(0);

                    for (let product of currentProducts) {
                        if (!data.some((d) => d.id == product.id)) {
                            let idx = this.content.indexOf(product);

                            this.content.splice(idx, 1);
                        }
                    }
                }
                return data;
            },
            updateTotalPrice: function() {
                let total = 0;
                for(let prod of this.content) {
                    total += Aux.commaStringToFloat(prod.price.replace(/,/g, '.')) * prod.qtd;
                }
                this.totalPrice = total.toFixed(2);
            },
            openCart() {
                this.visible = true;
            }
        },
        mounted: async function(){
            await this.updateCart();
            this.$eventHub.$on('updatecart', async data => {
                this.openCart();
                await this.updateCart();
            });
        },
    }
</script>

<style lang="scss" scoped>
    #collapse-2{
        top: 54px;
        right: 3px;
        position: absolute;
        z-index: 99;
        height: 500px;
        width: 433px;
        box-shadow: 2px 5px 8px #888888;
        display: flex;
        flex-direction: column;
    }
    .qtdInput {
        width: 100%;
        background: transparent;
        border: none;
        &::-webkit-outer-spin-button {
            margin: 0;
            -webkit-appearance: none;
        }
        &::-webkit-inner-spin-button {
            margin: 0;
            -webkit-appearance: none;
        }
    }
    .cart{
        flex: 1;
        background-color: $main-darkbg-font-color;
        overflow-y:auto;
    }
    .shipping{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 38px;
        background-color: $faded-font-color;
        color: #FFFFFF;
    }
    .buy{
        height: 90px;
        background-color: $light-gray;
        display: flex;
    }
    .total-price{
        display: flex;
        flex-direction: column;
        align-items: start;
        align-content: center;
        margin-top: 25px;
        margin-left: 25px;
        width: 180px;
        height: 90px;
        font-family: $cart-font;
        color: black;
    }
    .total{
        text-align: left;
        margin-bottom: 0px;
        font-size: 16px;
        font-weight: bold;
    }
    .parcel{
        font-size: 10px;
        text-align: left;

    }
    .button-container{
        display: flex;
        font-family: $secondary-font;
        background-color: $actionable-color;
        font-size: 12px;
        height: 43px;
        width: 193px;
        color: $main-darkbg-font-color;
        border-radius: 3px;
        margin-top: 25px;
        margin-left: 15px;
        cursor: pointer;
    }
    .button-container p{
        margin-bottom: 0;
        align-self: center;
        text-align: center;
        flex: 1;
    }
    .cart-cards{
        display: flex;
        height: 67px;
        margin-bottom: 20px;
        margin-top: 17px;
        margin-left: 25px;
    }
    .product{
        display: flex;
        font-family: $secondary-font;
        font-size: 14px;
        width: 238px;
    }
    .product img{
        width: 51px;
        height: 67px;
    }
    .product-info-container{
        text-align: left;
        margin-top: auto;
        margin-bottom: auto;
    }
    .img-container{
        margin-right: 8px;
    }
    .price{
        font-weight: bold;
        margin: 0;
    }
    .name{
        margin: 0;
    }
    .quantity{
        display: flex;
        align-items: center;
        width: 100px;
    }
    .quantity-button{
        display: flex;
        align-content: center;
        width: 33px;
        height: 33px;
        cursor: pointer;
    }
    .quantity-button img{
        margin: auto;
        user-select: none;
    }
    .quantity-number{
        width: 33px;
        height: 33px;
        align-content: center;
        border: $light-gray;
        border-style: solid;
        border-width: 1px;
        display: flex;
        user-select: none;
        p {
            margin: auto;
        }
    }

    .remove-btn{
        position: absolute;
        right: 33px;
        cursor: pointer;
        margin: auto;
        align-self: center;
        user-select: none;
    }
    .label{
        display: flex;
        font-family: $secondary-font;
        font-size: 12px;
        border-style: none none solid none;
        border-width: 1px;
        border-color: $dividers-color;
        margin-left: 16px;
        margin-right: 16px;
        text-align: center;
        height: 36px;
    }
    .label-product{
        flex: 1;
        margin: auto;
    }
    .label-quantity{
        flex: 1;
        margin: auto;
    }

    .add-button {
        background-color: $actionable-color;
        border-bottom-right-radius: 25%;
        border-top-right-radius: 25%;
    }

    .subtract-button {
        background-color: $canceled-color;
        border-bottom-left-radius: 25%;
        border-top-left-radius: 25%;
    }

</style>
