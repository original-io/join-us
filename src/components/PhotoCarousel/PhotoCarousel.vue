<template>
    <div class="carousel-container flexCenterCol">
        <!-- Muito tarde para refatorar o modelo para permitir um vetor de fotos, vai na gambiarra -->
        <div class="carousel flexCenterCol">
            <img style="padding: 10px 10px 0 10px" class="imgSlider" v-bind:src="require('@/assets/svg/up.svg')" v-on:click="previousImage()">
            <img v-bind:class="image.id == selected ? 'caurousel-selected' : 'caurousel-not-selected'" v-for="image in pictures" v-bind:src="image.src" v-on:click="selectImage($event)" v-bind:id="image.id">
            <img style="padding: 0px 10px 10px 10px" class="imgSlider" v-bind:src="require('@/assets/svg/down.svg')" v-on:click="nextImage()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoCarousel",
        data() {
            return {
                selected: 0
            }
        } ,
        props: [
            'pictures',
        ],
        methods: {
            selectImage($event) {
                this.selected = parseInt($event.toElement.id);
                this.emitSelection();
            },
            previousImage() {
                if (this.pictures[this.selected-1]){
                    this.selected -= 1;
                }else{
                    this.selected = this.pictures.length-1;
                }
                this.emitSelection();
            },
            nextImage() {
                if (this.pictures[this.selected+1]){
                    this.selected += 1;
                }else{
                    this.selected = 0;
                }
                this.emitSelection();
            },
            emitSelection() {
                this.$emit('selectionChange', this.selected);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-container {
        width: 100%;
        img {
            cursor: pointer;
        }
    }
    .carousel {
        margin-top: 12px;
        margin-bottom: 21px;
        img {
            padding: 4.5px 0;
        }
    }
    .caurousel-selected {
        height: 76px;
        width: auto;
        opacity: 1;
    }
    .caurousel-not-selected {
        height: 76px;
        width: auto;
        opacity: .5;
        transition: all 0.3s ease;
        &:hover {
            opacity: 1;
        }
    }
    .imgSlider {
        transition: all 0.6s ease;
        &:hover {
            transform: scale(1.5, 1.3);
            filter: invert(61%) sepia(72%) saturate(272%) hue-rotate(328deg) brightness(100%) contrast(130%);
        }
    }

</style>
