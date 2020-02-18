<template>
    <div>
        <cartModal v-bind:img="this.pictures[0]"></cartModal>
        <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
        <div class="product-container">
            <div class="page-block m-auto">
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
                                    <p class="product-parcels">Ou 6x de R${{(parseFloat(product.valorPromocao)/6.0).toFixed(2).replace('.', ',')}}</p>
                                </div>
                                <div v-else class="price-container">
                                    <p class="product-price">R${{product.valor}}</p>
                                    <p class="product-parcels">Ou 6x de R${{(parseFloat(product.valorPromocao.replace(',', '.'))/6.0).toFixed(2).replace('.', ',')}}</p>
                                </div>
                                <div class="color-container">
                                    Cor:
                                    <p class="selected">({{selectedColor}})</p>
                                    <div class="color-buttons-container">
                                        <div v-on:click="selectColor(color.nome)" v-bind:class="color.nome === selectedColor ? 'selected-color' : ''"  class="interactible color-button" v-for="color in product.cor" v-bind:style="'background-color:'+color.codigo"></div>
                                    </div>
                                </div>
                                <div v-if="product.tamanho" class="size-container">
                                    Tamanho:
                                    <p class="selected">({{selectedSize}})</p>
                                    <p class="guide">Guia de Medidas</p>
                                    <div class="size-buttons-container">
                                        <div v-on:click="selectSize(size)" class="interactible size-buttons" v-for="size in product.tamanho" v-bind:class="size == selectedSize ? 'selected-size' : ''">
                                            {{size}}
                                        </div>
                                    </div>
                                </div>
                                <div v-on:click="addToCart()" class="btn-actionable">ADICIONAR À SACOLA</div>
                                <p class="product-description">{{product.descricao}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row other-products flexCenterCol">
                        <div class="col-12 m-0 ">
                            <div class="col-sm-12 other-title">QUEM VIU, VIU TAMBÉM</div>
                            <div class="col-sm-12 other-product-card-container flexCenterRow">
                                <div class="other-product-card" v-for="product in productsPage">
                                    <router-link class="mainLink" v-bind:to="'/produtos/'+product.id">
                                        <img v-bind:src="require('@/assets/svg/'+product.foto)">
                                        <div class="other-product-card-footer">
                                            <div class="other-product-info">R${{product.valorPromocao}}</div>
                                            <div class="other-product-card-color" v-for="color in product.cor" v-bind:style="'background-color:'+color.codigo"></div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-sm-12 other-product-card-control flexCenterRow">
                                <img v-bind:src="require('@/assets/svg/left.svg')" v-on:click="prevPage" class="interactible">
                                {{productsPageNumber}} de 3
                                <img v-bind:src="require('@/assets/svg/right.svg')" v-on:click="nextPage" class="interactible">
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
                pictures: null,
                selected: 0,
                selectedSize: null,
                selectedColor: null,
                products: null,
                productsPageNumber: null,
                productsPage: null
            }
        },
        computed: {
            // Se items não estiver em computed, o breadcrumbs não atualiza automaticamente a cada navegação
            items() {
                return [
                    {
                        text: 'Home',
                        to: '/'
                    },
                    {
                        text: this.product.categoria,
                        to: '/produtos/categorias2/' + this.product.categoria
                    },
                    {
                        text: this.product.nome,
                        active: true
                    }
                ]
            }
        },
        methods: {
            async updateOtherProducts() {
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'produtos');
                this.products = data.slice(0,12);
                this.productsPageNumber = 1;
                this.productsPage = this.products.slice(0,4);
            },
            nextPage(){
                if(this.productsPageNumber+1 <= 3){
                    this.productsPageNumber += 1
                }else{
                    this.productsPageNumber = 1
                }
                this.updatePage();
            },
            prevPage(){
                if(this.productsPageNumber-1 >= 1){
                    this.productsPageNumber -= 1
                }else{
                    this.productsPageNumber = 3
                }
                this.updatePage();
            },
            updatePage(){
                let start = (this.productsPageNumber-1)*4;
                this.productsPage = this.products.slice(start, start+4);
            },
            async updateProduct() {
                this.loading = true;
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'produtos/id/' + this.$route.params.idProduto);
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
                await Aux.sleep(400);
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
                await axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'usuario/carrinho/adicionar/' + this.product.id, productData);
                this.$eventHub.$emit('updatecart');
                this.$bvModal.show('modal-add-cart');
            }
        },
        async created() {
            await this.updateProduct();
            await this.updateOtherProducts();
        },
        watch: {
            async $route(to, from) {
                this.loading = true;
                this.product = await this.updateProduct();
                this.loading = false;
            }
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
        height: 527px;
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
        margin: 10px 0 140px 0;
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
        transition: all 0.6s ease;
        &:hover {
            box-shadow: 0 0 0 4px rgba($actionable-color, 0.7);
        }
        &:active {
            box-shadow: none;
        }
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
        transition: all 0.5s ease;
        &:hover {
            background-color: $highlight-yellow;
            box-shadow: 0 0 0 4px rgba($highlight-yellow, 0.7);
        }
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
        transition: all 0.4s ease;
        &:hover {
            box-shadow: 0 0 0 4px $highlight-yellow;
        }
    }
    .selected-color{
        box-shadow: 0 0 0 4px $highlight-yellow;
    }
    .other-products{
        width: 100%;
        font-family: $primary-font;
        font-size: 26px;
        color: $primary-color;
        margin-top: 104px;
    }
    .other-title{
        justify-content: center;
        text-align: center;
    }
    .other-product-card{
        margin-left: 10px;
        img{
            flex: 1;
            height: 290px;
            width: auto;
        }
    }
    .other-product-info{
        font-family: $secondary-font;
        font-size: 14px;
        color: $main-font-color;
        flex: 1;
    }
    .other-product-card-control{
        margin-top: 10px;
        font-family: $secondary-font;
        font-size: 14px;
        color: $darker-blue;
        img{
            border: 2px solid $darker-blue;
            border-radius: 50%;
            flex-basis: 25px;
            flex-shrink: 0;
            height: 25px;
            padding: 4px;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .other-product-card-color{
        margin-top: 5px;
        text-align: center;
        border-radius: 50%;
        flex-basis: 10px;
        flex-shrink: 0;
        height:10px;
        margin-left: 3px;
    }
    .other-product-card-footer{
        display: flex;
        width: 100%;
    }
</style>
