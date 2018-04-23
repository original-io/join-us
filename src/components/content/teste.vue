<template>
    <div id="teste">
        
        <h1>Ola porra</h1>
       
        <span class="miniaturas-item" v-for="(item, index) in dados.slice(0, 5)">
            <b-img-lazy
                :src="item.thumbnailUrl"
                @click.native="mudaFoto(index)"
                blank-color="#bbb"
                :alt="item.title"
                :title="item.title" />
        </span>
        
        <b-img-lazy id="alvo" :src="dados[0].url" fluid width="430" height="556" blank-color="#bbb" alt="Imagem do produto" />
    </div>
</template>

<script>
    import axios from 'axios'
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    export default {
        data() {
            return {
                dados: []
            }
        },
        methods: {
            fetchFotos: function () {
                axios.get(apiUrl).then((response) => {
                    this.dados = response.data;
                }, (error) => {
                    console.log(error)
                })
            },
            mudaFoto: function (posicao) {
                var foto  = this.dados[posicao],
                    url   = foto.url,
                    title = foto.title,
                    alvo  = document.getElementById('alvo');
                
                alvo.src = url;
                alvo.title = title;
                alvo.alt = title;
            }
        },
        mounted: function () {
            this.fetchFotos();
        }
    }

</script>

<style lang="scss">
    #teste {
        background-color: coral;
        color: lime;
        min-height: 500px;
        width: 100%;
        > .miniaturas-item {
            > img {
                width: 50px;
                height: 40px;
                margin: 5px;
            }
        }
    }
</style>