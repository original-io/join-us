<template>
    <nav class="text-sm-right text-center secNavContainer">
        <div class="searchContainer">
            <div class="textInputContainerWIcon">
                <input :class="visible ? null : 'collapsed'"
                       :aria-expanded="visible ? true : false"
                       aria-controls="collapse-1"
                       @click="visible = !visible"
                       @blur="closeSearch"
                       v-on:keyup="atualizar" class="textInput" placeholder="Busca" id="busca">
                <svg class="textInputIcon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.517 4C7.81321 4 4 7.8131 4 12.5169C4 17.2208 7.81321 21.0342 12.517 21.0342C14.4706 21.0342 16.2704 20.3766 17.7074 19.2705L23.1132 24.6762C23.5448 25.1079 24.2447 25.1079 24.6763 24.6762C25.1079 24.2447 25.1079 23.5448 24.6763 23.1133L19.2704 17.7073C20.3764 16.2704 21.0341 14.4706 21.0341 12.5169C21.0341 7.8131 17.2209 4 12.517 4ZM6.21053 12.5169C6.21053 9.03413 9.03404 6.21053 12.517 6.21053C16 6.21053 18.8235 9.03413 18.8235 12.5169C18.8235 16 16 18.8236 12.517 18.8236C9.03404 18.8236 6.21053 16 6.21053 12.5169Z" fill="black"/>
                </svg>
            </div>
            <Header_nav_search v-bind:visible="visible" v-bind:busca="entrada" v-bind:resultado="resultado"></Header_nav_search>
        </div>
        <div class="cartContainer">
            <svg class="cartIcon" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0008 13C11.0008 14.1046 10.1054 15 9.00085 15C7.89628 15 7.00085 14.1046 7.00085 13C7.00085 11.8954 7.89628 11 9.00085 11C10.1054 11 11.0008 11.8954 11.0008 13Z" fill="black"/>
                <path d="M20.0008 13C20.0008 14.1046 19.1054 15 18.0008 15C16.8963 15 16.0008 14.1046 16.0008 13C16.0008 11.8954 16.8963 11 18.0008 11C19.1054 11 20.0008 11.8954 20.0008 13Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88943 4.94872C7.88943 2.19535 10.1642 0 12.9244 0H14.0773C16.8375 0 19.1123 2.19535 19.1123 4.94872V6.76923H24.8615C26.1344 6.76923 27.1933 7.88499 26.9724 9.21152C26.6139 11.363 26.0074 14.4913 25.1925 17.2645C24.7832 18.6543 24.301 20.0102 23.7762 21.0946C23.2588 22.1603 22.6098 23.1634 21.773 23.7057C21.4601 23.8882 21.0054 23.9948 20.7241 24H6.27755C5.99628 23.9948 5.54158 23.8882 5.22868 23.7057C4.39188 23.1634 3.7429 22.1603 3.22549 21.0946C2.70074 20.0102 2.21854 18.6543 1.8092 17.2645C0.994349 14.4913 0.387834 11.363 0.0293414 9.21152C-0.19164 7.885 0.867256 6.76923 2.14018 6.76923H7.88943V4.94872ZM7.88943 8.76923V11.7179H9.88943V8.76923H17.1123V11.7179H19.1123V8.76923H24.8615C24.9172 8.76923 24.9559 8.79172 24.9786 8.81743C24.9997 8.84131 25.0032 8.86121 24.9995 8.88288C24.6455 11.0086 24.064 14.0185 23.2738 16.6999C22.8807 18.0375 22.4561 19.238 21.977 20.2211C21.509 21.1851 21.073 21.7543 20.7257 22L20.7241 22H6.27755L6.27603 22C5.92871 21.7543 5.4927 21.1851 5.02465 20.2211C4.54563 19.238 4.12104 18.0375 3.72786 16.6999C2.93765 14.0185 2.35619 11.0086 2.00215 8.88288C1.99855 8.86121 2.00201 8.84131 2.02312 8.81743C2.04583 8.79172 2.08452 8.76923 2.14018 8.76923H7.88943ZM17.1123 6.76923H9.88943V4.94872C9.88943 3.34045 11.2278 2 12.9244 2H14.0773C15.7739 2 17.1123 3.34045 17.1123 4.94872V6.76923Z" fill="black"/>
            </svg>
        </div>
    </nav>
</template>


<script>
    import Header_nav_search from '@/components/Header/Header_nav_search';
    import axios from "axios";

    export default {
        name: "Header_nav_secondary",
        components: {
            Header_nav_search
        },
        data (){
            return {
                entrada: "",
                resultado: "",
                visible: false
            }
        },
        methods: {
            atualizar: async function(){
                this.entrada = document.getElementById("busca").value;
                axios.get("http://localhost:8081/produto/nome/" + this.entrada)
                        .then(data =>{
                            this.resultado = data.data;
                        }).catch(err => {
                });
            },
            closeSearch() {
                this.visible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .secNavContainer {
        padding-right: 40px;
    }

    .searchContainer {
        width:40%;
    }

    .textInputContainerWIcon {
        width: 80%;
        text-align: left;
        color: $soft-font-color;
        font-size: 12px;
        &:hover {
            width: 90%;
            svg {
                transform: translateX(-5px);
            }
        }
    }

    .cartContainer {
        @include flexCenter(row);
        height: 100%;
        .cartIcon {
            height: 100%;
            width: 100%;
            padding: 0 2px 5px 2px;
        }
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
    }

    svg {
        transition: all 0.6s ease;
        path {
            fill: $soft-font-color;
            transition: all 0.6s ease;
        }

        &:hover {
            path {
                fill: $primary-color;
            }
        }
    }
</style>
