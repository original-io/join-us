<template>
    <div id="contatos" class="row">
        <p class="col-7 offset-1 mb-0">
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.<br>
            Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100<br>
            CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br<br>
        </p>
        <div class="col-2 offset-2 mt-3">
            <img :src="imgLogoFooter" alt="Logo da empresa" title="Logo da empresa">
        </div>
    </div>
</template>

<script>
    import imgLogoFooter from '../../assets/img/logo-footer.png';

    export default {
        data() {
            return {
                imgLogoFooter: imgLogoFooter
            }
        }
    }

</script>

<style lang="scss">
    footer {
        > div#contatos {
            background-color: #DE8F75;
            margin: 0;
            > p {
                font-size: 12px;
                color: #FFF;
                line-height: 20px;
                text-align: left;                
            }
        }
    }

</style>
