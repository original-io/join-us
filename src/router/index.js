import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Subcategorias from '../views/Subcategorias.vue';
import Subcategorias2 from '../views/Subcategorias2.vue';
import Produtos from '../views/Produtos.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/produtos',
        name: 'Produtos',
        component: Produtos
    },
    {
        path: '/produtos/categorias',
        name: 'Categorias',
        component: Index
    },
    {
        path: '/produtos/categorias/:categoria',
        name: 'Subcategoria',
        component: Subcategorias
    },
    {
        path: '/produtos/categorias2/:categoria',
        name: 'Subcategoria',
        component: Subcategorias2
    }
];

const router = new VueRouter({
    routes
});

export default router
