<template>
    <div>
        <div class="page-block m-auto">
            <transition name="fade">
                <b-spinner variant="primary" label="Spinning" class="loader" v-if="loading"></b-spinner>
            </transition>
            <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
            <div class="filtersContainer m-auto row">
                <div class="col-2 m-auto">
                    <label>Categoria:</label>
                    <b-form-select id="catFilter"
                                   @change="updateProducts"
                                   class="filter filterSelect"
                                   v-model="filteredCat">
                        <b-form-select-option value="">Todas</b-form-select-option>
                        <b-form-select-option v-for="cat of catList" :value="cat.id">{{cat.nome}}</b-form-select-option>
                    </b-form-select>
                </div>

                <div class="col-2 m-auto">
                    <label>Sub-categoria:</label>
                    <b-form-select id="subcatFilter"
                                   class="filter filterSelect"
                                   @change="updateProducts"
                                   v-model="filteredSubcat">
                        <b-form-select-option value="">Todas</b-form-select-option>
                        <b-form-select-option v-for="subcat of subcatList" :value="subcat.id" default>{{subcat.nome}}</b-form-select-option>
                    </b-form-select>
                </div>

                <div class="col-2 m-auto">
                    <label>Preço Máximo:</label>
                    <b-form-input id="maxPriceFilter"
                                  class="filter filterInput"
                                  type="number"
                                  @change="updateProducts"
                                  :min="minPrice"
                                  :max="maxPrice"
                                  v-model="filteredMaxPrice"></b-form-input>
                </div>

                <div class="col-2 m-auto">
                    <label>Nome:</label>
                    <b-form-input id="nameFilter"
                                  type="text"
                                  class="filter filterSelect"
                                  @change="updateProducts"
                                  v-model="filteredName"></b-form-input>
                </div>

                <div class="col-2 m-auto">
                    <label>Ordenar por:</label>
                    <b-form-select id="nameFilter"
                                   class="filter filterSelect"
                                   @change="updateProducts"
                                   v-model="orderBy"></b-form-select>
                </div>
            </div>

            <div class="row">
                <div class="flexCenterRow offFilterContainer">
                    <label for="offFilter">Em promoção</label>
                    <b-form-checkbox id="offFilter" class="m-auto offFilterInput" v-model="filteredOff" @change="updateProducts" value="true" unchecked-value=""></b-form-checkbox>
                </div>
            </div>

            <div class="row">
                <div class="col-12 flexCenterRow productsContainer m-auto">
                    <div v-for="prod of filteredProds" class="productContainer">
                            <div class="flexCenterCol">
                                <router-link :to="`/produtos/${prod.id}`">
                                <img :src="require(`@/assets/svg/${prod.foto}`)" class="prodImg">
                                </router-link>
                                <div>
                                    <div v-if="prod.valor > prod.valorPromocao">
                                        <router-link :to="`/produtos/${prod.id}`">
                                            <div class="prodName">{{prod.nome}}</div>
                                        </router-link>
                                        <div class="flexCenterRow">
                                                <div class="product-original-price">{{'R$' + prod.valor}}</div>
                                                <div class="product-price-separator"> | </div>
                                                <div class="product-price">{{'R$' + prod.valorPromocao}}</div>
                                            <button class="btn-actionable" @click="addToCart($event, prod)">+</button>
                                        </div>
                                    </div>
                                    <div v-if="prod.valor <= prod.valorPromocao">
                                        <router-link :to="`/produtos/${prod.id}`">
                                        <div class="prodName">{{prod.nome}}</div>
                                        </router-link>
                                        <div class="flexCenterRow">
                                            <div class="product-price">{{'R$' + prod.valor}}</div>
                                            <button class="btn-actionable" @click="addToCart($event, prod)">+</button>
                                        </div>
                                    </div>
                                </div>
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
        components: {
            Breadcrumbs,
            SectionCollapse
        },

        data() {
            return {
                loading: false,
                prodList: [],
                catList: [],
                subcatList: [],
                filteredOff: false,
                filteredProds: [],
                filteredCat: "",
                filteredSubcat: "",
                filteredName: null,
                filteredMaxPrice: null,
                minPrice: null,
                maxPrice: null,
                orderBy: null
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
                        text: 'Produtos',
                        active: true
                    }
                ]
            }
        },
        methods: {
            async loadProducts() {
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'produtos');
                this.prodList = data;
            },
            async loadCategories() {
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'categorias');
                this.catList = data;
            },
            async loadSubcategories() {
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'subcategorias');
                this.subcatList = data;
            },
            loadFiltersFromQuery() {
                if(this.$route.query) {
                    this.filteredCat = this.$route.query.catfilter || this.filteredCat;
                    this.filteredSubcat = this.$route.query.subcatfilter || this.filteredSubcat;
                    this.filteredMaxPrice = this.$route.query.maxpricefilter || this.filteredMaxPrice;
                    this.filteredName = this.$route.query.namefilter || this.filteredName;
                    this.filteredOff = this.$route.query.offfilter || this.filteredOff;
                }
            },
            filterProdList() {
                this.filteredProds = [];
                let filteredCatName, filteredSubcatName, filteredMaxPrice = this.filteredMaxPrice,
                filteredName, filteredOff = this.filteredOff;
                if(this.filteredCat) {
                    for(let cat of this.catList) {
                        if(cat.id == this.filteredCat) {
                            filteredCatName = Aux.normalizeString(cat.nome);
                            break;
                        }
                    }
                }
                if(this.filteredSubcat) {
                    for(let subcat of this.subcatList) {
                        if(subcat.id == this.filteredSubcat) {
                            filteredSubcatName = Aux.normalizeString(subcat.nome);
                            break;
                        }
                    }
                }
                if(this.filteredName) {
                    filteredName = Aux.normalizeString(this.filteredName);
                }

                let catFilterPass = true, subcatFilterPass = true, maxPriceFilterPass = true, nameFilterPass = true,
                        offFilterPass = true;

                for(let p of this.prodList) {
                    let prodCatName = Aux.normalizeString(p.categoria), prodSubcatName = Aux.normalizeString(p.subcategoria),
                            prodPrice = p.valor, prodPromPrice = p.valorPromocao,
                            prodName = Aux.normalizeString(p.nome);
                    if(filteredCatName) {
                        catFilterPass = (prodCatName == filteredCatName);
                    }
                    if(filteredSubcatName) {
                        subcatFilterPass = (prodSubcatName == filteredSubcatName);
                    }
                    if(filteredMaxPrice) {
                        maxPriceFilterPass = (Aux.commaStringToFloat(prodPromPrice) <= Aux.commaStringToFloat(filteredMaxPrice));
                    }
                    if(filteredName) {
                        nameFilterPass = (prodName.includes(filteredName));
                    }
                    if(filteredOff) {
                        offFilterPass = (Aux.commaStringToFloat(prodPrice) > Aux.commaStringToFloat(prodPromPrice));
                    }

                    if(catFilterPass && subcatFilterPass && maxPriceFilterPass && nameFilterPass && offFilterPass) {
                        this.filteredProds.push(p);
                    }
                }
            },
            calculateMinMaxPrice() {
                let minPrice = 0, maxPrice = 0;
                for(let p of this.filteredProds) {
                    let pValorProm = Aux.commaStringToFloat(p.valorPromocao);
                    if(pValorProm > maxPrice) {
                        maxPrice = pValorProm;
                    }
                    if(pValorProm < minPrice) {
                        minPrice = pValorProm;
                    }
                }
                this.minPrice = minPrice;
                this.maxPrice = maxPrice;
            },
            async updateProducts() {
                this.filteredProds = [];
                this.loading = true;
                await this.loadProducts();
                await this.loadCategories();
                await this.loadSubcategories();
                this.filterProdList();
                this.calculateMinMaxPrice();
                this.loading = false;
            },
            async addToCart(event, prod) {
                event.target.disabled = true;
                let productData ={
                    cor: prod.selectedColor,
                    tamanho: prod.selectedSize
                };
                await axios.post(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'usuario/carrinho/adicionar/' + prod.id, productData);
                this.$eventHub.$emit('updatecart');
            }
        },
        async created() {
            this.loadFiltersFromQuery();
            await this.updateProducts();
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
    }

    .productsContainer {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex: 1 1 auto;
        margin-bottom: 80px;
    }

    .prodImg {
        max-width: 100%;
        width: 150px;
    }

    .btn-actionable {
        display: inline;
        margin: auto 10px;
        font-size: 12px;
        border: none;
        height: auto;
    }

    .prodName {
        width: 100%;
        font-size: 14px;
        font-family: $secondary-font;
        text-align: center;
    }

    .productContainer {
        width: 20%;
        padding: 20px 0;
        border-right: 1px solid $dividers-color;
        &:nth-child(5n+5) {
            border: none;
        }
    }

    #offFilter {
        margin: 10px;
    }

    .offFilterContainer {
        margin: 10px auto 0 auto;
        label {
            margin: auto;
        }
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
    }

</style>
