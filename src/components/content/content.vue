<template>
    <main>
        <span id="linha1"></span>
        <span id="linha2"></span>
        <b-row>
            <ccFotosProduto/>
            <ccDescricaoProduto/>
        </b-row>
        <b-row>
            <ccSugestoes/>
        </b-row>
    </main>
</template>



<script>
    import ccFotosProduto from './fotos-produto.vue';
    import ccDescricaoProduto from './descricao-produto.vue';
    import ccSugestoes from './sugestoes.vue';
    import ccTeste from './teste.vue';
    
    export default {
        data() {
            return {
                
            }
        },
        components: {
            ccFotosProduto,
            ccDescricaoProduto,
            ccSugestoes,
            ccTeste
        }
    }

</script>

<style lang="scss">
    main {
        position: relative;
        background-color: #FFF;       
        > span {
            position: absolute;
            height: 2px;
            display: inline-block;
            background-color: #E0DA9C;
            padding: 0;
            margin: 0;
            &#linha1 {
                top: 40px;
                right: 0;                
                z-index: 0;
                @media only screen and (min-width: 1000px) {
                    width: 200px;
                }
            }
            &#linha2 {
                top: 500px;
                left: 0;
                z-index: 0;
                @media only screen and (min-width: 1000px) {
                    width: 1000px;
                }
            }
            
        }
        >.row {
            
            margin: 0;
        }
    }
    
</style>