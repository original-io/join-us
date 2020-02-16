<template>
    <div class="container-fluid">
        <div class="row">
            <div class="page-block secondaryFont breadcrumbsContainer">
                <b-breadcrumb :items="items" class="breadcrumbsItem secondaryFont">
                    <!-- Alimentado pelo componente pai em data() > items -->
                </b-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumbs.vue",
        props: [
            'items'
        ]
    }
</script>

<style lang="scss" scoped>
    .breadcrumbsContainer {
        .breadcrumb-item {
            font-size: 12px;
            color: $faded-font-color;
            &.active {
                color: $faded-font-color;
                font-weight: bold;
            }
        }
    }
    .breadcrumb {
        background-color: transparent;
    }
</style>
