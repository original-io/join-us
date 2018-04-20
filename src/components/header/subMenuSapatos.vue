<template>
    <div id="subMenuSapatos">
        <ul>
            <li v-for="sapato in sapatos">
                <a :class="rtnString(sapato.classe)" :href="rtnString(sapato.url)">{{ sapato.texto }}</a>                
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sapatos: [
                    {classe: 'rasteiras', texto: 'Rasteiras', url: '#'},
                    {classe: 'sapatilhas', texto: 'Sapatilhas', url: '#'},
                    {classe: 'alpargatas', texto: 'Alpargatas', url: '#'},
                    {classe: 'mocassins', texto: 'Mocassins', url: '#'},
                    {classe: 'tenis', texto: 'Tênis', url: '#'},
                    {classe: 'botas', texto: 'Botas', url: '#'},
                    {classe: 'salto-anabela', texto: 'Salto Anabela', url: '#'},
                    {classe: 'salto-plataforma', texto: 'Salto Plataforma', url: '#'},
                    {classe: 'salto-alto', texto: 'Salto Alto', url: '#'},
                    {classe: 'salto-medio', texto: 'Salto Médio', url: '#'},
                ]
            }
        },
        methods: {
            rtnString(str) {
                return str;
            }
        }
    }
</script>

<style lang="scss">
    #subMenuSapatos {
        width: 90%;
        margin: 10px auto 30px;
        > ul {
            list-style: none;
            padding: 0;
            > li {
                display: inline-block;
                vertical-align: top;
                margin: 0 25px 50px;
                > a {
                    display: block;
                    width: 154px;
                    height: 154px;
                    font-size: 14px;
                    line-height: 23px;
                    text-align: center;
                    color: #DE8F75;
                    text-transform: capitalize;
                    padding-top: 70%;
                    
                    &.rasteiras{
                        background: transparent url('/src/assets/img/icones-sapatos/rasteiras.png') no-repeat center center;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/rasteiras-hover.png');}}
                    &.sapatilhas {
                        background: transparent url('/src/assets/img/icones-sapatos/sapatilhas.png') no-repeat center center;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/sapatilhas-hover.png');}}
                    &.alpargatas {
                        background: transparent url('/src/assets/img/icones-sapatos/alpargatas.png') no-repeat center center;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/alpargatas-hover.png');}}
                    &.mocassins{
                        background: transparent url('/src/assets/img/icones-sapatos/mocassins.png') no-repeat center center;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/mocassins-hover.png');}}
                    &.tenis {
                        background: transparent url('/src/assets/img/icones-sapatos/tenis.png') no-repeat center center;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/tenis-hover.png');}}
                    &.botas {
                        background: transparent url('/src/assets/img/icones-sapatos/botas.png') no-repeat center 10px;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/botas-hover.png');}}
                    &.salto-anabela {
                        background: transparent url('/src/assets/img/icones-sapatos/salto-anabela.png') no-repeat center 20px;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/salto-anabela-hover.png');}}
                    &.salto-plataforma {
                        background: transparent url('/src/assets/img/icones-sapatos/salto-plataforma.png') no-repeat center 7px;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/salto-plataforma-hover.png');}}
                    &.salto-alto {
                        background: transparent url('/src/assets/img/icones-sapatos/salto-alto.png') no-repeat center 10px;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/salto-alto-hover.png');}}
                    &.salto-medio {
                        background: transparent url('/src/assets/img/icones-sapatos/salto-medio.png') no-repeat center 25px;
                        &:hover {background-image: url('/src/assets/img/icones-sapatos/salto-medio-hover.png');}}
                }
            }
        }
    }
</style>