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
                            <ul class="categoryList list-unstyled">
                                <!-- Eventualmente podemos refatorar, ver observação no readme -->
                                <li v-for="category in categories" class="">
                                    <router-link :to="'/produtos/categorias/' + removeDiacritics(category.nome.toLowerCase())" class="catContainer flexCenterCol">
                                        <img :src="category.foto" class="catImg" height="50px">
                                        <span class="catName secondaryFont">{{category.nome}}</span>
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
    import Aux from "../assets/auxscripts/auxscripts.js";

    export default {
        name: "Index",
        components: {
            SectionCollapse,
            Breadcrumbs
        },
        data() {
            return {
                loading: false,
                items: [
                    {
                        text: 'Home',
                        to: '/'
                    }
                ],
                categories: null
            }
        },
        methods: {
            async getCategories() {
                // Mockando tempo de espera do BD
                await Aux.sleep(500);
                let { data } = await axios.get('http://localhost:8081/categorias');
                for(let category of data) {
                    category.foto = require('../assets/svg/' + category.foto);
                }
                return data;
            },
            removeDiacritics(str) {
                return Aux.removeDiacritics(str);
            }
        },
        async created() {
            this.loading = true;
            this.categories = await this.getCategories();

            this.loading = false;
        }
    }
</script>

<style scoped lang="scss">
    .section-collapse {
        width: 100%;
    }

    .indexMainContainer {
        position: relative;
        padding: 80px 30px 30px 30px;
    }

    .loader {
        position: absolute;
        top: 50%;
        width: 4rem;
        height: 4rem;
    }

    .catContainer {
        margin: 10px 20px;
        &:hover {
            .catName {
                transform: scale(1.2);
            }
            .catImg {
                 filter: invert(61%) sepia(72%) saturate(272%) hue-rotate(328deg) brightness(100%) contrast(130%);
            }
        }
    }

    .catImg {
        height: auto;
        width: 150px;
        margin-bottom: 5px;
        transition: all 0.2s ease;
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
    }
</style>
