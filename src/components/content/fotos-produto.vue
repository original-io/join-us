<template>
    <b-col id="fotos-produto" tag="article" sm="12" lg="7">
        <b-row>
            <b-col id="miniaturas-nav" sm="2" offset-sm="1" lg="2">
                <div id="miniaturas-video">
                    <h4>Vídeo</h4>
                    <b-img src="/src/assets/img/icon-video.png" alt="Vídeo do produto" title="Vídeo do produto" />
                </div>
                <button id="nav-up" @click="scrollThumbnail('miniaturas-nav-container','up')">up</button>
                <div id="miniaturas-nav-container">
                    <span class="miniaturas-item" v-for="(item, index) in dados.slice(0, 20)">
                        <b-img-lazy
                            v-bind:src="item.thumbnailUrl"
                            @click.native="changePhoto(index)"
                            blank-color="#bbb"
                            v-bind:alt="item.title"
                            v-bind:title="item.title" />
                    </span>
                </div>
                <button id="nav-down" @click="scrollThumbnail('miniaturas-nav-container','dwn')">down</button>
            </b-col>
            <b-col id="foto-produto" sm="8" offset-sm="2" lg="9" offset-lg="1">
                <b-img 
                    v-b-modal.modal1
                    id="alvo"
                    src="src/assets/img/loading_icon.gif"
                    fluid
                    blank-color="#bbb"
                    alt="Imagem do produto" />
                
                <!-- Modal Component -->
                <b-modal id="modal1" size="lg" centered title="Imagem do produto">
                    <img id="alvoModal" src="src/assets/img/loading_icon.gif" alt="Imagem do produto" />
                </b-modal>
            </b-col>
        </b-row>        
    </b-col>
</template>

<script>
    import axios from 'axios';    
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    
    export default {
        data() {
            return {
                dados: []
            };
        },
        methods: {
            fetchFotos: function () {
                axios.get(apiUrl).then((response) => {
                    this.dados = response.data;
                    document.getElementById('alvo').src = response.data[0].url;                    
                    document.getElementById('alvoModal').src = response.data[0].url;                    
                }, (error) => {
                    console.log(error)
                });
            },
            changePhoto: function (posicao) {
                var foto       = this.dados[posicao],
                    url        = foto.url,
                    title      = foto.title,
                    alvo       = document.getElementById('alvo'),
                    alvoModal  = document.getElementById('alvoModal');
                
                alvo.src = url;
                alvoModal.src = url;
                alvo.title = title;
                alvo.alt = title;
            },
            scrollThumbnail: function(alvo, upDwn) {                
                var t = document.getElementById(alvo);
                if (upDwn === 'up') {
                    //subir
                    return t.scrollTop -=90;
                } else {
                    //descer
                    return t.scrollTop +=90;
                }
            }
        },
        mounted: function () {
            this.fetchFotos();
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
                > img#alvo {
                    width: 430px;
                    height: 556px;
                    cursor: pointer;
                }
                img#alvoModal{
                    display: block;
                    margin: 0 auto;
                }
                
            }
        }
    }
</style>
