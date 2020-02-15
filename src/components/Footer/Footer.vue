<template>
    <footer class="block-footer">
        <div class="block-footer-top">

        </div>
        <div class="block-footer-bottom flexCenterRow container-fluid">
            <div class="page-block">
                <div class="row">
                    <div class="col-6 footerText secondaryFont">
                        <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
                        <p>EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</p>
                        <p>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
                    </div>
                    <div ref="brandLogoContainer" id="brandLogoContainer" class="col-6 footerBrandLogo">
                        <!-- Pode ser configurada em .env -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        mounted() {
            this.$nextTick(() => {
                this.$refs.brandLogoContainer.innerHTML = process.env.VUE_APP_BRANDLOGOFILECODE;
                this.$refs.brandLogoContainer.childNodes[0].childNodes[0].style.fill = 'white';
                this.$refs.brandLogoContainer.childNodes[0].style.height = '25px';
            })
        }
    }
</script>

<style lang="scss" scoped>
    .block-footer {
        margin-top: 100px;
        border-top: 2px solid $faded-font-color;
        .block-footer-bottom {
            background-color: $primary-color;
        }
    }

    .footerText {
        font-size: 12px;
        color: white;

        p {
            margin: 3px;
        }
    }

    .footerBrandLogo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>
