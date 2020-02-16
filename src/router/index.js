import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

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
        component: Index
    },
    {
        path: '/produtos/categorias',
        name: 'Categorias',
        component: Index
    },
    {
        path: '/produtos/categorias/sapatos',
        name: 'Sapatos',
        component: Index
    },
    {
        path: '/produtos/categorias/bolsas',
        name: 'Bolsas',
        component: Index
    },
    {
        path: '/produtos/categorias/acessorios',
        name: 'Acessórios',
        component: Index
    },
    {
        path: '/produtos/categorias/off',
        name: 'Off',
        component: Index
    }
];

const router = new VueRouter({
    routes
});

export default router
