<template>
    <div>
        <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
        <div class="product-container">
            <div class="page-block m-auto">
                <transition name="fade">
                    <b-spinner variant="primary" label="Spinning" class="loader" v-if="loading"></b-spinner>
                </transition>
                <SectionCollapse :collapsed="loading" class="w-100">
                    <div class="row m-0">
                        <div class="col-sm-3 col-12 carousel-container flexCenterCol">
                            <span>Vídeo</span>
                            <img v-bind:src="require('@/assets/svg/play.svg')">
                            <img v-bind:src="require('@/assets/svg/up.svg')">
                            <!-- Muito tarde para refatorar o modelo para permitir um vetor de fotos, vai na gambiarra -->
                            <img v-bind:src="require('@/assets/svg/' + product.foto)">
                            <img v-bind:src="require('@/assets/svg/' + product.foto)">
                            <img v-bind:src="require('@/assets/svg/' + product.foto)">
                            <img v-bind:src="require('@/assets/svg/' + product.foto)">
                            <img v-bind:src="require('@/assets/svg/down.svg')">
                        </div>
                        <div class="col-sm-4 col-12">
                            <img class="big" v-bind:src="require('@/assets/svg/' + product.foto)">
                        </div>
                        <div class="col-sm-5">
                            <div class="info-container">
                                <p class="product-name">{{product.nome}}</p>
                                <p class="product-id">{{product.id}} | {{product.subID}}</p>
                                <div v-if="product.valor>product.valorPromocao" class="price-container">
                                    <p class="product-original-price">R${{product.valor}}</p>
                                    <p class="product-price-separator">|</p>
                                    <p class="product-price">R${{product.valorPromocao}}</p>
                                </div>
                                <div v-else>
                                    <p class="product-price">R${{product.valor}}</p>
                                </div>
                                <p>Cor: (fucsia)</p>
                                <p>Lista cores</p>
                                <p>Tamanho: 37 Guia de Medidas</p>
                                <p>Lista de tamanhos</p>
                                <div class="add-cart">ADICIONAR À SACOLA</div>
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

    export default {
        name: "Produto",
        components: {
            SectionCollapse,
            Breadcrumbs
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
                ]
            }
        },
    methods: {
            async updateProduct() {
                this.loading = true;
                let { data } = await axios.get('http://localhost:8081/produtos/id/' + this.$route.params.idProduto);
                this.product = data;
                this.items.push({name: data.categoria, active: true});
                await Aux.sleep(1000);
                this.loading = false;
                return data;
            }
        },
        async created() {
            this.updateProduct();
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-container{
        width: 100%;
    }
    .big{
        width: auto;
        height: 100%;
    }
    .info-container{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        border: 2px solid $light-grayish-cyan;
        border-radius: 3px;
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
        font-family: $secondary-font;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .product-description{
        text-align: justify;
        font-family: $secondary-font;
        font-size: 14px;
        color: $main-font-color;
        margin-top: 16px;
    }
    .product-name{
        font-family: $primary-font;
        font-weight: bold;
        color: $main-font-color;
        font-size: 26px;
        margin-bottom: 0;
    }
    .product-id{
        font-family: $secondary-font;
        font-size: 14px;
        color: $main-font-color;
    }
    .product-price{
        font-size: 20px;
        font-family: $primary-font;
        font-weight: bold;
        color: $soft-font-color;
    }
    .product-original-price{
        font-family: $secondary-font;
        font-size: 14px;
        color: $canceled-color;
        text-decoration-line: line-through;
    }
    .product-price-separator{
        font-family: $secondary-font;
        font-size: 14px;
        color: $canceled-color;
        margin-right: 5px;
    }
    .price-container{
        display: flex;
        align-items: center;
    }

    .page-block {
        position: relative;
    }
</style>
