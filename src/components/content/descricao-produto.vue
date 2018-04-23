<template>
    <b-col tag="article" sm="9" offset-sm="3" lg="4" offset-lg="0">
        <div id="descricao">
            <h2>Rasteira Tira Dedo</h2>
            <h3>RT 0568 | 03.07.0653</h3>
            <div id="precos">
                <p><span>R$ 69,00 | </span> R$ 55,20</p>
                <span>Ou 6x de  R$ 9,20</span>
            </div>
            <div id="cores">
                Cor: <span id="corSelecionada">({{corSelecionada}})</span>
                <ul>
                    <li class="cores" v-for="(cor, index) in cores" :style="{ backgroundColor: cor.hex}" @click="changeValues('corSelecionada', cor.nome, 'cores')"></li>
                </ul>
            </div>
            <div id="tamanhos">
                Tamanho: <span id="tamanhoSelecionado">({{tamanhoSelecionado}})</span>
                <a href="#">Guia de medidas</a>
                <ul>
                    <li class="tamanhos" v-for="(tamanho, index) in tamanhos" @click="changeValues('tamanhoSelecionado', tamanho, 'tamanhos')"> {{tamanho}} </li>
                
                </ul>
            </div>
            <button>Adicionar à sacola</button>
            <p id="item-descricao">
                Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.
            </p>
        </div>
    </b-col>
</template>

<script>
    export default {
        data() {
            return {
                corSelecionada: 'Fucsia',
                tamanhoSelecionado: 33,
                tamanhos: [33,34,35,36,37,38,39,40,41,42],
                cores: [
                    {nome: 'Fucsia', hex: '#A9095E'},
                    {nome: 'Cor 2', hex: '#6B85C1'},
                    {nome: 'Cor 3', hex: '#A14830'},
                    {nome: 'Preto', hex: 'black'},
                    {nome: 'Laranja', hex: 'Orange'}
                ]
            };
        },
        methods: {
            changeValues: function (targetId, str, thisClass) {
                var lista = document.getElementsByClassName(thisClass);
                var mudaTexto = document.getElementById(targetId).innerHTML = "("+ str +")";
                
                for (var i = 0; i < lista.length; i++) {
                    lista[i].onclick = function() {
                        var ativo = document.querySelector('.'+thisClass+'.ativo');
                        if (ativo && ativo !== this) {
                            ativo.classList.remove('ativo');
                        }
                        this.classList.add('ativo');
                    };
                }
            }
        }
    }

</script>

<style lang="scss">
    #descricao {
        background-color: #FFF;
        width: 444px;
        height: 533px;
        border: 2px solid #D2E1DF;
        border-radius: 3px;
        margin: 12px 0 0 0;
        padding: 15px 20px;
        > h2 {
            font-size: 26px;
            font-style: normal;
            font-weight: bold;
            line-height: 37px;
            color: #202020;
            text-transform: uppercase;
            margin: 0;
        }
        > h3 {
            font-size: 14px;
            font-style: normal;
            line-height: 23px;
            color: #202020;
            margin: 0 0 20px 0;
        }
        > div#precos {
            > p {
                color: #686868;
                font-size: 20px;
                line-height: 28px;
                font-weight: bold;
                margin-bottom: 0;
                > span {
                    color: #E35442;
                    font-size: 14px;
                    line-height: 23px;
                    text-decoration: line-through;
                }
            }
            > span {
                color: #7F7F7F;
                font-size: 12px;
                line-height: 20px;
            }
        }
        > div#cores {
            font-size: 14px;
            font-style: normal;
            line-height: 23px;
            color: #202020;
            margin-top: 50px;
            > span {
                color: #5F75AA;
                margin-left: 10px;
            }
            > ul {
                list-style: none;
                padding: 0;
                margin: 15px 0;
                > li {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    margin: 0 2px;
                    border-radius: 50px;
                    cursor: pointer;
                    &.ativo {
                        border: 3px solid #E0DA9C;
                    }
                }
            }
        }
        div#tamanhos {
            font-size: 14px;
            font-style: normal;
            line-height: 23px;
            color: #202020;
            > span {
                color: #5F75AA;
                margin-left: 10px;
            }
            > a {
                text-decoration: underline;
                color: #DE8F75;
                margin-left: 133px;
            }
            > ul {
                list-style: none;
                padding: 0;
                margin: 20px 0 53px;
                > li {
                    display: inline;
                    line-height: 20px;
                    text-align: center;
                    color: #2A5A75;
                    background-color: #EBEBEB;
                    margin: 0 2px;
                    padding: 8px;
                    border-radius: 50px;
                    cursor: pointer;
                    &.ativo {background-color: #E0DA9C;}
                }
            }
        }
        > button {
            width: 100%;
            background-color: #32917B;
            font-style: normal;
            font-size: 18px;
            line-height: 29px;
            border: none;
            border-radius: 3px;
            color: #FFF;
            text-align: center;
            text-transform: uppercase;
            padding: 10px;
            
        }
        > p#item-descricao {
            font-size: 14px;
            font-style: normal;
            line-height: 29px;
            color: #202020;
        }
    }
</style>


