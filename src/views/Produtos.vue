<template>
    <div>
        <div class="page-block m-auto">
            <div class="filtersContainer m-auto row">
                <div class="col-2 m-auto">
                    <label for="catFilter">Categoria:</label>
                    <b-form-select id="catFilter"
                                   class="filter filterSelect"
                                   v-model="filteredCat"
                                   :options="catList"></b-form-select>
                    <b-form-checkbox v-model="filteredOff" value="true" unchecked-value="false"></b-form-checkbox>
                </div>

                <div class="col-2 m-auto">
                    <label for="subcatFilter">Sub-categoria:</label>
                    <b-form-select id="subcatFilter"
                                   class="filter filterSelect"
                                   v-model="filteredSubcat"
                                   :options="subcatList"></b-form-select>
                </div>

                <div class="col-2 m-auto">
                    <label for="maxPriceFilter">Preço Máximo:</label>
                    <b-form-input id="maxPriceFilter"
                                  class="filter filterInput"
                                  type="range"
                                  v-model="filteredMaxPrice"></b-form-input>
                </div>

                <div class="col-2 m-auto">
                    <label for="nameFilter">Nome:</label>
                    <b-form-select id="nameFilter"
                                   class="filter filterSelect"
                                   v-model="filteredName"></b-form-select>
                </div>

                <div class="col-2 m-auto">
                    <label for="orderByFilter">Ordenar por:</label>
                    <b-form-select id="nameFilter"
                                   class="filter filterSelect"
                                   v-model="orderBy"></b-form-select>
                </div>

            </div>
            <div class="productsContainer row">
                <div class="col-12">
                    <img :src="prod.foto">
                    <div class="flexCenterRow">
                        <div v-if="prod.preco > prod.precoProm">
                            <div class="product-original-price">{{prod.preco}}</div>
                            <div class="product-price-separator"> | </div>
                            <div class="product-price">{{prod.precoProm}}</div>
                            <button class="btn-actionable">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
    import axios from 'axios';
    import SectionCollapse from "../components/CollapseSection";
    import Aux from "../assets/auxscripts/auxscripts";

    export default {
        name: "Produtos",
        data() {
            return {
                loading: false,
                prodList: null,
                catList: null,
                subcatList: null,
                filteredOff: false,
                filteredProds: null,
                filteredCat: null,
                filteredSubcat: null,
                filteredName: null,
                filteredMaxPrice: null,
                minPrice: null,
                maxPrice: null,
                orderBy: null
            }
        },
        methods() {
            return {
                async loadProducts() {
                    let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'produtos');
                    console.log("Produtos:" + JSON.stringify(data));
                    this.prodList = data;
                },
                async loadCategories() {
                    let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'categorias');
                    console.log("Cats:" + JSON.stringify(data));
                    this.catList = data;
                },
                async loadSubcategories() {
                    let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'subcategorias');
                    console.log("Subcats:" + JSON.stringify(data));
                    this.subcatList = data;
                },
                getFiltersFromQuery() {
                    let returnData = [];
                    this.filteredCat = this.$route.query.catfilter;
                    this.filteredSubcat = this.$route.query.subcatfilter;
                    this.filteredMaxPrice = this.$route.query.maxpricefilter;
                    this.filteredName = this.$route.query.namefilter;
                    this.filteredOff = this.$route.query.offfilter;
                },
                calculateMinMaxPrice() {

                }
            }
        },
        async created() {
            this.loading = true;
            await this.loadProducts();
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    .product-price{
        display: inline;
        font-size: 14px;
        font-family: $primary-font;
        font-weight: bold;
        color: $soft-font-color;
    }

    .product-original-price{
        font-size: 12px;
        display: inline;
        color: $canceled-color;
        text-decoration-line: line-through;
    }

    .product-price-separator{
        display: inline;
        color: $canceled-color;
        margin-right: 5px;
    }
</style>
