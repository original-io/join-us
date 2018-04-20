<template>
    <b-row id="contatos">
        <b-col sm="12" offset-sm="0" tag="p" md="6" offset-md="1" class="mb-0">
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.<br>
            Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100<br>
            CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br<br>
        </b-col>
        <b-col sm="12" offset-sm="0" md="2" offset-md="2" class="mt-3">
            <img src="/src/assets/img/logo-footer.png" alt="Logo da empresa" title="Logo da empresa">
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
            return {}
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
