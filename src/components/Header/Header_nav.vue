<template>
    <div class="block-header-nav">
        <div class="page-block m-auto container-fluid">
            <div class="row primaryFont">
                <header_nav_auth id="authNav" class="col-sm-3"></header_nav_auth>
                <header_nav_main id="mainNav" class="col-sm-6"></header_nav_main>
                <header_nav_secondary id="secNav" class="col-sm-3"></header_nav_secondary>
            </div>
        </div>
    </div>
</template>

<script>
    import Header_nav_auth from '@/components/Header/Header_nav_auth';
    import Header_nav_main from '@/components/Header/Header_nav_main';
    import Header_nav_secondary from '@/components/Header/Header_nav_secondary';

    export default {
        name: 'Header_nav',
        components: {
            Header_nav_auth,
            Header_nav_main,
            Header_nav_secondary
        }
    }
</script>

<style lang="scss" scoped>
    .block-header-nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        color: $soft-font-color;
        border-bottom: 1px solid $dividers-color;
    }


</style>
