<template>
    <div>
        <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
        <!-- Breadcrumbs só vai renderizar se estivermos a pelo menos um nível de profundidade -->
        <div class="categoryListContainer container-fluid flexCenterCol">
            <div class="page-block">
                <div class="row flexCenterRow indexMainContainer">
                    <transition name="fade">
                        <b-spinner variant="primary" label="Spinning" class="loader" v-if="loading"></b-spinner>
                    </transition>

                    <SectionCollapse :collapsed="loading" class="w-100">
                        <main class="w-100">
                            <div class="row">
                                <div class="col-sm-4 catContainer catTitleContainer">
                                    <div class="m-auto">
                                        <div class="weirdFont w-50">
                                        {{category.toUpperCase()}}
                                            <div class="weirdFontShadow">
                                                {{category.toUpperCase()}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 catContainer catListContainer">
                                    <ul class="catList list-unstyled">
                                        <li v-for="sc in subcategories" class="catListItem">
                                            <div class="catContainer flexCenterCol">
                                                <span class="catName secondaryFont">{{sc.nome}}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 catContainer catImgContainer">
                                    <img :src="catBanner" class="catBanner">
                                </div>
                            </div>
                        </main>
                    </SectionCollapse>
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
        name: "Subcategoria",
        components: {
            SectionCollapse,
            Breadcrumbs
        },
        data() {
            return {
                loading: false,
                subcategories: null,
                catBanner: null
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
                        text: this.$route.params.categoria,
                        active: true
                    }
                ]
            },
            category() {
                return this.$route.params.categoria
            }
        },
        methods: {
            async getSubcategories() {
                // Ver readme, em observações, sobre 'off' e categorias.
                if(Aux.removeDiacritics(this.$route.params.categoria) == 'off') {
                    this.$router.push('/produtos/off')
                }
                // Mockando tempo de espera do BD
                await Aux.sleep(1000);
                let { data } = await axios.get('http://localhost:8081/categorias/' + Aux.removeDiacritics(this.$route.params.categoria) + '/subcategorias');
                for(let category of data) {
                    category.foto = require('../assets/svg/' + category.foto);
                }
                return data;
            },
            async getCatBanner() {
                let { data } = await axios.get('http://localhost:8081/categorias/' + Aux.removeDiacritics(this.$route.params.categoria));
                let bannerPath = require('../assets/img/' + data.banner);
                return bannerPath;
            },
            removeDiacritics(str) {
                return Aux.removeDiacritics(str)
            }
        },
        watch: {
            async $route(to, from) {
                this.loading = true;
                this.subcategories = await this.getSubcategories();
                this.catBanner = await this.getCatBanner();
                this.loading = false;
            }
        },
        async created() {
            this.loading = true;
            this.subcategories = await this.getSubcategories();
            this.catBanner = await this.getCatBanner();
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    .section-collapse {
        width: 100%;
    }

    .indexMainContainer {
        position: relative;
        padding: 10px 30px 30px 30px;
    }

    .loader {
        position: absolute;
        top: 50%;
        width: 4rem;
        height: 4rem;
    }

    .catContainer {
        margin: auto;
        &:last-child{
            text-align: right;
        }
    }

    .weirdFont {
        margin: auto;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 70px;
        line-height: 98px;
        text-align: right;
        color: $highlight-yellow;
        -webkit-text-fill-color: $highlight-yellow;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: $darker-blue;
        position: relative;
        left: 0;
        top: 0;
        word-wrap: break-word;
        .weirdFontShadow {
            width: 100%;
            font-size: 70px;
            line-height: 98px;
            text-align: right;
            color: transparent;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: $faded-font-color;
            position: absolute;
            top: 3px;
            left: 11px;
            z-index: -1;
        }
    }

    .catListItem {
        color: $primary-color;
        font-size: 14px;
        line-height: 42px;
    }

    .catList {
        margin: 0 auto 0 0;
        width: 50%;
        border-left: 1px solid $softer-font-color;
    }

    .catBanner {
        width: 100%;
    }
</style>
