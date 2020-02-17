<template>
    <b-collapse id="collapse-2">
        <div class="label">
            <p class="label-product">Produto</p>
            <p class="label-quantity">Quantidade</p>
        </div>
        <div class="cart">
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
                        <div class="quantity-button" v-on:click="subtractProduct(product.id)">
                            <img src="../../assets/svg/subtract.svg">
                        </div>
                        <div class="quantity-number">
                            <p v-bind:id="`p${product.id}`">{{product.qtd}}</p>
                        </div>
                        <div class="quantity-button" v-on:click="addProduct(product.id)">
                            <img src="../../assets/svg/plus.svg">
                        </div>
                    </div>
                    <div class="remove-btn">
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
                <p class="total">Total: R$149,90</p>
                <p class="parcel">até 3x de R$49,90 sem juros</p>
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
    export default {
        name: "Header_nav_cart",
        components: {
            vuescroll
        },
        data(){
            return{
                content: [],
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
                }
            }
        },
        methods:{
            subtractProduct: async function(id){
                let valor = document.getElementById("p"+id).innerText;
                if (valor>0) {
                    await axios.post("http://localhost:8081/usuario/carrinho/subtrair/" + id)
                            .then(data => {
                                document.getElementById("p" + id).innerText = data.data;
                            }).catch(err => {
                                console.log(err)
                            });
                }
            },
            addProduct: async function(id){
                await axios.post("http://localhost:8081/usuario/carrinho/adcionar/"+id)
                        .then(data =>{
                            document.getElementById("p"+id).innerText = data.data;
                        }).catch(err =>{
                            console.log(err)
                        });
            },
            updateCart: async function(){
                await axios.get("http://localhost:8081/usuario/carrinho")
                        .then(data =>{
                            let results = data.data;
                            results.forEach(async result =>{
                                let product = result;
                                await axios.get("http://localhost:8081/produtos/id/"+product.id)
                                        .then(res =>{
                                            product.price = res.data[0].valorPromocao;
                                            product.name = res.data[0].nome;
                                            product.pic = res.data[0].foto;
                                        }).catch(err =>{
                                            console.log(err);
                                        });
                                this.content.push(product);
                            })
                        }).catch(err =>{
                            console.log(err);
                        })
            }
        },
        mounted: async function(){
            this.updateCart();
        }
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
        background-color: $light-gray;
        cursor: pointer;
    }
    .quantity-button img{
        margin: auto;
    }
    .quantity-number{
        width: 33px;
        height: 33px;
        align-content: center;
        border: $light-gray;
        border-style: solid;
        border-width: 1px;
        display: flex;
    }
    .quantity-number p{
        font-weight: bold;
        color: $secondary-actionable-color;
        text-align: center;
        margin: auto;
    }
    .remove-btn{
        position: absolute;
        right: 33px;
        cursor: pointer;
        margin: auto;
        align-self: center;
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
</style>
