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
                        <main class="w-100 flexCenterRow">
                            <ul class="categoryList list-unstyled">
                                <!-- Eventualmente podemos refatorar, ver observação no readme -->
                                <li v-for="sc in subcategories" class="">
                                    <router-link :to="{path: '/produtos', query: {subcatfilter: sc.id}}">
                                        <div class="catContainer flexCenterCol">
                                            <img :src="sc.foto" class="catImg" height="50px">
                                            <span class="catName secondaryFont">{{sc.nome}}</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
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
                subcategories: null
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
                        text: this.$route.params.categoria
                    }
                ]
            }
        },
        methods: {
            async getSubcategories() {
                // Ver readme, em observações, sobre 'off' e categorias.
                if(Aux.removeDiacritics(this.$route.params.categoria) == 'off') {
                    this.$router.push('/produtos?offfilter=true')
                }
                // Mockando tempo de espera do BD
                await Aux.sleep(400);
                let { data } = await axios.get(process.env.VUE_APP_API_HOST + ":" + process.env.VUE_APP_API_PORT + "/" + 'categorias/' + Aux.removeDiacritics(this.$route.params.categoria) + '/subcategorias');
                for(let category of data) {
                    category.foto = require('../assets/svg/' + category.foto);
                }
                return data;
            },
            removeDiacritics(str) {
                return Aux.removeDiacritics(str)
            }
        },
        watch: {
            async $route(to, from) {
                this.loading = true;
                this.subcategories = await this.getSubcategories();
                this.loading = false;
            }
        },
        async created() {
            this.loading = true;
            this.subcategories = await this.getSubcategories();
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
        padding: 20px 30px 30px 30px;
    }

    .loader {
        position: absolute;
        top: 50%;
        width: 4rem;
        height: 4rem;
    }

    .catContainer {
        margin: 10px 80px 30px 20px;
        transition: all 0.6s ease;
        &:hover {
            .catName {
                transform: scale(1.2);
            }
            .catImg {
                box-shadow: 0 0 8px 3px $primary-color;
                transform: scale(1.03);
            }
        }
    }

    .catImg {
        height: auto;
        width: 120px;
        margin-bottom: 5px;
        clip-path: none;
        transition: all 0.6s ease;
    }

    .catName {
        font-size: 14px;
        color: $primary-color;
        transition: all 0.6s ease;
    }

    .categoryList {
        display: flex;
        justify-content: center;
        align-items: baseline;
        flex-wrap: wrap;
        width: 70%;
        @media (max-width: 1599px) {
            width: 100%;
        }
    }
</style>
