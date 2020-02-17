<template>
    <div>
        <cartModal v-bind:img="this.pictures[0]"></cartModal>
        <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
        <div class="product-container">
            <div class="page-block m-auto">
                <transition name="fade">
                    <b-spinner variant="primary" label="Spinning" class="loader" v-if="loading"></b-spinner>
                </transition>
                <SectionCollapse :collapsed="loading" class="w-100">
                    <div class="row m-0">
                        <div class="col-sm-7 col-12 row m-0">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-2 col-12 flexCenterCol">
                                <span class="video">Vídeo</span>
                                <img v-bind:src="require('@/assets/svg/play.svg')">
                                <PhotoCarousel v-bind:pictures="pictures" v-on:selectionChange="updateSelectedPhoto($event)"></PhotoCarousel>
                            </div>
                            <div class="col-sm-6 col-12">
                                <img class="big" v-bind:src="pictures[selected].src">
                            </div>
                        </div>
                        <div class="col-sm-5 col-12">
                            <div class="info-container col-sm-10">
                                <p class="product-name">{{product.nome.toUpperCase()}}</p>
                                <p class="product-id">{{product.id}} | {{product.subID}}</p>
                                <div v-if="product.valor>product.valorPromocao" class="price-container">
                                    <p class="product-original-price">R${{product.valor}}</p>
                                    <p class="product-price-separator">|</p>
                                    <p class="product-price">R${{product.valorPromocao}}</p>
                                    <p class="product-parcels">Ou 6x de R${{(parseFloat(product.valorPromocao.replace(',', '.'))/6.0).toFixed(2).replace('.', ',')}}</p>
                                </div>
                                <div v-else class="price-container">
                                    <p class="product-price">R${{product.valor}}</p>
                                    <p class="product-parcels">Ou 6x de R${{(parseFloat(product.valorPromocao.replace(',', '.'))/6.0).toFixed(2).replace('.', ',')}}</p>
                                </div>
                                <div class="color-container">
                                    Cor:
                                    <p class="selected">({{selectedColor}})</p>
                                    <div class="color-buttons-container">
                                        <div v-on:click="selectColor(color.nome)" v-bind:class="color.nome === selectedColor ? 'selected-color' : ''"  class="color-button" v-for="color in product.cor" v-bind:style="'background-color:'+color.codigo"></div>
                                    </div>
                                </div>
                                <div v-if="product.tamanho" class="size-container">
                                    Tamanho:
                                    <p class="selected">({{selectedSize}})</p>
                                    <p class="guide">Guia de Medidas</p>
                                    <div class="size-buttons-container">
                                        <div v-on:click="selectSize(size)" class="size-buttons" v-for="size in product.tamanho" v-bind:class="size == selectedSize ? 'selected-size' : ''">
                                            {{size}}
                                        </div>
                                    </div>
                                </div>
                                <div v-on:click="addToCart()" class="add-cart">ADICIONAR À SACOLA</div>
                                <p class="product-description">{{product.descricao}}</p>
                            </div>
                        </div>
                    </div>
                </SectionCollapse>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
    import axios from 'axios';
    import SectionCollapse from "../components/CollapseSection";
    import Aux from "../assets/auxscripts/auxscripts.js";
    import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel.vue'
    import cartModal from '@/components/Modal/AddToCartModal.vue'

    export default {
        name: "Produto",
        components: {
            SectionCollapse,
            Breadcrumbs,
            PhotoCarousel,
            cartModal
        },
        data(){
            return {
                loading: false,
                product: null,
                items: [
                    {
                        name: 'Home',
                        to: '/'
                    }
                ],
                pictures: null,
                selected: 0,
                selectedSize: null,
                selectedColor: null
            }
        },
        methods: {
            async updateProduct() {
                this.loading = true;
                let { data } = await axios.get('http://localhost:8081/produtos/id/' + this.$route.params.idProduto);
                this.product = data;
                this.pictures = [];
                this.pictures.push({src :require('@/assets/svg/' + this.product.foto), id : 0});
                this.pictures.push({src :require('@/assets/svg/prod01.svg'), id : 1});
                this.pictures.push({src :require('@/assets/svg/prod02.svg'), id : 2});
                this.pictures.push({src :require('@/assets/svg/prod03.svg'), id : 3});
                if(this.product.tamanho) {
                    this.selectedSize = this.product.tamanho[0];
                }
                this.selectedColor = this.product.cor[0].nome;
                this.items.push({name: data.categoria, active: true});
                await Aux.sleep(1000);
                this.loading = false;
                return data;
            },
            updateSelectedPhoto(value) {
                this.selected = value;
            },
            selectSize(size){
                this.selectedSize = size;
            },
            selectColor(color){
                this.selectedColor = color;
            },
            async addToCart(){
                let productData ={
                    cor: this.selectedColor,
                    tamanho: this.selectedSize
                };
                await axios.post('http://localhost:8081/usuario/carrinho/adicionar/' + this.product.id, productData)
                this.$eventHub.$emit('updatecart');
                this.$bvModal.show('modal-add-cart');
            }
        },
        async created() {
            this.updateProduct();
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-container{
        img{
            cursor: pointer;
        }
    }
    .carousel{
        margin-top: 12px;
        margin-bottom: 21px;
        img{
            margin-top: 9px;
        }
    }
    .big{
        width: auto;
        height: 100%;
    }
    .info-container{
        font-family: $secondary-font;
        font-size: 14px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        border: 2px solid $light-grayish-cyan;
        border-radius: 3px;
        color: $main-font-color;
        background-color: $bg-color;
        max-width: 444px;
    }
    .product-container{
        margin-top: 10px;
    }


    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
    }

    .add-cart{
        display: flex;
        height: 60px;
        background-color: $actionable-color;
        color: $main-darkbg-font-color;
        border-radius: 3px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 35px;
    }
    .product-description{
        text-align: justify;
        margin-top: 16px;
    }
    .product-name{
        font-family: $primary-font;
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 0;
    }
    .product-price{
        display: inline;
        font-size: 20px;
        font-family: $primary-font;
        font-weight: bold;
        color: $soft-font-color;
    }
    .product-original-price{
        display: inline;
        color: $canceled-color;
        text-decoration-line: line-through;
    }
    .product-price-separator{
        display: inline;
        color: $canceled-color;
        margin-right: 5px;
    }
    .product-parcels{
        font-size: 12px;
        color: $softer-font-color;
    }
    .price-container{
        align-items: center;
    }
    .page-block {
        position: relative;
    }
    .guide{
        display: inline;
        float: right;
        color: $primary-color;
        text-decoration: underline;
        cursor: pointer;
    }
    .selected{
        display: inline;
        color: $secondary-actionable-color;
    }
    .video{
        color: $primary-color;
    }
    .color-container{
        margin-top: 34px;
        p{
            display: inline;
        }
    }
    .color-button{
        display: inline;
    }
    .size-buttons-container{
        display: flex;
        margin-top: 5px;
        width: 100%;
    }
    .size-buttons{
        display: inline;
        text-align: center;
        font-family: $primary-font;
        color: $darker-blue;
        margin-right: 3px;
        padding: 6px 5px;
        border-radius: 50%;
        flex-basis: 34px;
        flex-shrink: 0;
        background-color: $light-gray;
        cursor: pointer;
    }
    .selected-size{
        background-color: $highlight-yellow;
        font-weight: bold;
    }
    .size-container{
        margin-top: 14px;
    }
    .color-buttons-container{
        display: flex;
        width: 100%;
        margin-top: 10px;
    }
    .color-button{
        display: inline;
        text-align: center;
        border-radius: 50%;
        flex-basis: 24px;
        flex-shrink: 0;
        height:24px;
        margin-right: 14.67px;
        border: 1px solid white;
    }
    .selected-color{
        box-shadow: 0 0 0 4px $highlight-yellow;
    }
</style>
