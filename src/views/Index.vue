<template>
    <div>
        <div class="add-btn" @click="openModal = !openModal">
            <img src="https://image.flaticon.com/icons/png/512/32/32339.png" alt="" class="text">
        </div>
        <Breadcrumbs v-if="items[1]" v-bind:items="items"></Breadcrumbs>
        <!-- Breadcrumbs só vai renderizar se estivermos a pelo menos um nível de profundidade -->
        <div>


        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';

    export default {
        name: "Index",
        components: {
            Breadcrumbs
        },
        data() {
            return {
                openModal: false,
                items: [
                    {
                        text: 'Home',
                        active: true
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .add-btn {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: antiquewhite;
        color: darkgoldenrod;
        text-align: center;
        transition: transform .5s cubic-bezier(.48,.02,.47,1.19);
        position: relative;

        .text {
            width: 20px;
            height: 20px;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &:hover {
            transform: rotate(180deg);
        }
    }

    .my-modal-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .my-modal {
        width: 500px;
        height: 500px;
        background: white;
        box-shadow: 0 0 15px rgba(black, .2);

        opacity: 0;
        transform: translateY(-100px);
        transition: all .5s ease-in-out;

        &.modal-open {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
    }
</style>
