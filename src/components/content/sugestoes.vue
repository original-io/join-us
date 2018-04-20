<template>
    <b-col id="viuTambem">
        <h2>Quem viu viu também</h2>
        <div id="viuTambem-container">
            <div class="viu-item" v-for="item in itens" :key="item.id">
                <img :src="item.url">
                <a href="#" title="Mais detalhes">Mais detalhes</a>
                <p class="preco">{{item.preco}}</p>
                <ul v-if="item.cores">
                    <li v-for="cor in item.cores" :class="classe(cor.title)" :title="classe(cor.title)" :style="{ 'background-color': cor.hex }">{{cor.title}}</li>
                </ul>
            </div>
            <div id="viuTambem-controller">
                <button id="btn-prev" title="Anterior">Prev</button>
                <p>1 de 10</p>
                <button id="btn-next" title="Próximo">next</button>
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        data() {
            return {
                itens: [
                    {
                        url: 'https://lorempixel.com/290/374/fashion/1/',
                        preco: 'R$ 501,90',
                        cores: [
                            {title: 'Vermelho', hex: 'red'},
                            {title: 'Verde', hex: 'green'},
                            {title: 'Azul', hex: 'blue'},
                            {title: 'Branco', hex: '#FFF'},
                        ],
                    },
                    {
                        url: 'https://lorempixel.com/290/374/fashion/2/',
                        preco: 'R$ 129,90',
                        cores: [
                            {title: 'Vermelho', hex: 'red'},
                            {title: 'Verde', hex: 'green'},
                            {title: 'Azul', hex: 'blue'},
                        ],
                    },
                    {
                        url: 'https://lorempixel.com/290/374/fashion/3/',
                        preco: 'R$ 19,90',
                    },
                    {
                        url: 'https://lorempixel.com/290/374/fashion/4/',
                        preco: 'R$ 4,90',
                    },
                ]
            }
        },
        methods: {
            classe(str) {
                return str;
            }
        }
    }

</script>

<style lang="scss">
    #viuTambem {
        margin: 71px 0 200px;
        > h2 {
            font-size: 26px;
            line-height: 37px;
            text-align: center;
            color: #DE8F75;
            text-transform: uppercase;
            margin: 56px 0 17px;
        }
        > div#viuTambem-container {
            position: relative;
            max-width: 1200px;
            height: 458px;
            overflow: hidden;
            margin: 0 auto;
            > div.viu-item {
                position: relative;
                display: inline-block;
                vertical-align:top;
                height: 403px;
                width: 290px;
                margin: 0 10px 55px 0;
                &:last-child {
                    background-color: blue;
                }
                > img {
                    height: 374px;
                    width: 290px;
                }
                > a{
                    position: absolute;
                    top: 12px;
                    right: 10px;
                    height: 45px;
                    width: 45px;
                    background-image: url('/src/assets/img/detalhes.png');
                    font-size: 0;
                }
                > p.preco {
                    font-size: 16px;
                    font-style: normal;
                    line-height: 26px;
                    color: #202020;
                    margin-top: 5px;
                }
                > ul {
                    position: absolute;
                    bottom: 3px;
                    right: 0;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    > li {
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        border-radius: 50px;
                        margin: 3px 0 0 5px;
                        font-size: 0;
                        cursor: pointer;
                    }
                }
            }
            > div#viuTambem-controller {
                position: absolute;
                bottom: 0;
                width: 160px;
                left: 50%;
                margin-left: -80px;
                > p {
                    font-size: 14px;
                    line-height: 23px;
                    text-align: center;
                    color: #2A5A75;
                    margin: 5px 0 8px 0;
                }
                > button {
                    position: absolute;
                    font-size: 0;
                    width: 35px;
                    height: 35px;                    
                    top: 0;
                    background: transparent url('/src/assets/img/seta.png') no-repeat 0 0;
                    border: none;
                    cursor: pointer;
                    &#btn-prev {left: 0;}
                    &#btn-next {
                        right: 0;                        
                        transform: rotate(180deg);
                    }                    
                }
            }
        }        
    }
</style>



