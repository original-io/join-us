<template>
    <b-col id="fotos-produto" tag="article" sm="12" lg="7">
        <b-row>
            <b-col id="miniaturas-nav" sm="2" offset-sm="1" lg="2">
                <div id="miniaturas-video">
                    <h4>Vídeo</h4>
                    <b-img src="/src/assets/img/icon-video.png" alt="Vídeo do produto" title="Vídeo do produto" />
                </div>
                <button id="nav-up">up</button>
                <div id="miniaturas-nav-container">
                    <span class="miniaturas-item" v-for="item in itens">
                        <b-img-lazy :src="item.url" width="74" height="94" blank-color="#bbb" alt="Miniatura do produto" />
                    </span>
                </div>
                <button id="nav-down">down</button>
            </b-col>
            <b-col id="foto-produto" sm="8" offset-sm="2" lg="9" offset-lg="1">
                <b-img-lazy src="https://lorempixel.com/430/556/fashion/1/" fluid width="430" height="556" blank-color="#bbb" alt="Imagem do produto" />
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        props: {
            img: {type: String, default: null}
        },
        data() {
            return {
                itens: [
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                    {url: 'https://lorempixel.com/74/94/fashion/1/'},
                ]
            }
        }
    }

</script>

<style lang="scss">
    #fotos-produto {
        > .row{
            > #miniaturas-nav {
                max-width: 74px;                
                margin: 30px 0 0 40px;
                padding: 0;
                #miniaturas-video {
                    > h4 {
                        font-size: 12px;
                        font-style: normal;
                        line-height: 20px;
                        color: #DE8F75;
                        text-align: center;
                        margin-bottom: 0;
                    }
                    > img {
                        display: block;
                        margin: 0 auto;
                        cursor: pointer;
                        width: 32px;
                        height: 32px;
                    }
                }
                > button {
                    font-size: 0;
                    width: 100%;
                    height: 20px;                    
                    top: 0;
                    background: transparent url('/src/assets/img/seta-produto.png') no-repeat center center;
                    border: none;
                    cursor: pointer;                    
                    &:hover {background-color: #FFE8E8}
                    &#nav-up {margin-bottom: 15px;}
                    &#nav-down {
                        margin-top: 15px;
                        transform: rotate(180deg);
                    }
                }
                > #miniaturas-nav-container {
                    width: 74px;
                    height: 405px;
                    margin: 0 auto;
                    padding: 0;
                    overflow: hidden;
                    > span.miniaturas-item {
                        display: block;
                        cursor: pointer;                        
                        margin-bottom: 9px;
                        > img {
                            width: 74px;
                            height: 94px;
                            opacity: .5;
                            &:hover, .ativa {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
            > #foto-produto {
                margin-top: 12px;
                > img {
                    width: 430px;
                    height: 556px;
                }
            }
        }
    }
</style>

