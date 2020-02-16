<template>
    <footer class="block-footer">
        <div class="block-footer-top flexCenterRow">
            <div class="container-fluid flexCenterCol">
                <div v-if="socMediaFacebook || socMediaInstagram || socMediaPinterest" class="row footerRow socialMediaFooterRow page-block">
                    <div class="col-sm-12">
                        <a id="facebookAnchor" ref="facebookAnchor">
                            <svg id="facebookIcon" ref="facebookIcon" class="socialMediaIcon" width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.27815H2.56802V5.76779C2.44772 4.42428 2.73605 3.07585 3.39595 1.89637C3.8463 1.27242 4.44941 0.772368 5.14849 0.4433C5.84757 0.114231 6.61971 -0.0330373 7.39204 0.0153724C8.94261 -0.0523736 10.4948 0.10393 12 0.479372L11.352 4.30679C10.6793 4.12 9.98621 4.01571 9.28799 3.99626C8.27999 3.99626 7.39204 4.35318 7.39204 5.35971V8.27815H11.4839L11.208 12.0151H7.39204V25H2.56802V12.0175H0V8.28053V8.27815Z" fill="#DE8F75"/>
                            </svg>
                        </a>
                        <a id="instagramAnchor" ref="instagramAnchor">
                            <svg id="instagramIcon" ref="instagramIcon" class="socialMediaIcon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0173 25H6.98155C3.14164 25 0 21.8146 0 17.9213V7.07873C0 3.18537 3.14164 0 6.98155 0H17.0173C20.8572 0 24 3.18537 24 7.07873V17.9213C24 21.8146 20.8572 25 17.0173 25ZM17.0173 23.1295C18.3814 23.1295 19.6692 22.5851 20.6432 21.5976C21.6171 20.61 22.154 19.3043 22.154 17.9213V7.07873C22.154 5.69571 21.6183 4.38884 20.6432 3.40129C19.6692 2.41375 18.3802 1.8694 17.0173 1.8694H6.98155C5.6164 1.8694 4.32859 2.41375 3.3546 3.40129C2.38061 4.38884 1.84374 5.69458 1.84374 7.07873V17.9213C1.84374 19.3054 2.38061 20.61 3.3546 21.5976C4.32859 22.5851 5.6164 23.1295 6.98155 23.1295H17.0173Z" fill="#DE8F75"/>
                                <path d="M18.6447 12.4031C18.6447 16.1044 15.6858 19.1034 12.0364 19.1034C8.38701 19.1034 5.42694 16.1033 5.42694 12.4031C5.42694 8.70293 8.38589 5.70166 12.0364 5.70166C15.6869 5.7028 18.6447 8.70293 18.6447 12.4031ZM12.0039 8.02108C9.6143 8.02108 7.67641 9.98481 7.67641 12.4088C7.67641 14.8316 9.61318 16.7965 12.0039 16.7965C14.3946 16.7965 16.3313 14.8316 16.3313 12.4088C16.3325 9.98481 14.3946 8.02108 12.0039 8.02108Z" fill="#DE8F75"/>
                                <path d="M20.3159 5.59791C20.3159 6.47409 19.6154 7.18435 18.7512 7.18435C17.8871 7.18435 17.1866 6.47409 17.1866 5.59791C17.1866 4.72173 17.8871 4.01147 18.7512 4.01147C19.6154 4.01147 20.3159 4.72173 20.3159 5.59791Z" fill="#DE8F75"/>
                            </svg>
                        </a>
                        <a id="pinterestAnchor" ref="pinterestAnchor">
                            <svg id="pinterestIcon" ref="pinterestIcon" class="socialMediaIcon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4994 25C19.4038 25 25 19.4047 25 12.4998C25 5.59574 19.4038 0 12.4994 0C5.59617 0 0 5.59574 0 12.4998C0 17.7958 3.29206 22.3213 7.94093 24.1428C7.93588 24.1221 7.93116 24.1018 7.92669 24.0823C7.861 23.8041 7.84864 23.5179 7.83632 23.2329L7.83207 23.1361C7.77777 21.9948 7.87401 20.8558 8.16058 19.7469C8.39981 18.8186 8.61676 17.8843 8.83375 16.9498C8.9981 16.2421 9.16246 15.5344 9.33655 14.829C9.41072 14.5278 9.37827 14.2784 9.28924 13.9881C8.86919 12.6396 8.9781 11.3297 9.83342 10.1841C10.2433 9.63512 10.9054 9.41509 11.6112 9.51241C12.2746 9.60209 12.6717 10.0149 12.8422 10.6539C12.9876 11.1952 12.9056 11.7294 12.7831 12.2605C12.6778 12.7129 12.5408 13.1567 12.4037 13.6008C12.2392 14.1338 12.0746 14.6671 11.9647 15.2155C11.8852 15.6147 11.8977 16.1269 12.0042 16.5203C12.4354 18.1211 14.5755 17.7874 15.5943 17.0184C16.2868 16.4944 16.7814 15.7273 17.1093 14.9339C17.495 14.0059 17.6518 13.1171 17.6376 12.1243C17.6285 11.435 17.5417 10.5561 17.2733 9.90784C16.6172 8.32623 15.1199 7.22561 13.4415 6.98662C11.5579 6.71967 9.87595 7.12463 8.39317 8.50765C6.75794 10.0363 6.30195 13.0885 7.62938 14.9736C7.79693 15.2126 7.7891 15.3742 7.73287 15.6436C7.71181 15.7417 7.69418 15.8407 7.67653 15.9397C7.64101 16.1391 7.60546 16.3386 7.54196 16.5312L7.52603 16.5797C7.4446 16.8282 7.35691 17.0959 7.061 17.1165C6.83369 17.1318 6.61967 17.0147 6.44613 16.8806C6.0724 16.5934 5.76663 16.1713 5.56519 15.7463C5.51908 15.649 5.4645 15.5566 5.40985 15.464C5.36387 15.3862 5.31785 15.3083 5.27678 15.2273C4.70614 14.1087 4.4287 12.8646 4.54956 11.6084C4.59911 11.0899 4.68466 10.5659 4.82575 10.0634C5.35758 8.18039 6.66102 6.63002 8.35432 5.66742C8.82851 5.39886 9.3485 5.17097 9.8675 5.00343C11.6757 4.42097 13.6849 4.49516 15.4734 5.12016C16.7924 5.58022 18.0268 6.30875 18.9014 7.41882C20.3405 9.24583 20.7405 11.3705 20.2998 13.6491C19.9606 15.4017 19.2302 16.944 17.8876 18.1688C17.4173 18.5985 16.8701 18.9285 16.2874 19.1801C15.9882 19.309 15.6798 19.4206 15.3681 19.515C13.8619 19.9756 12.1428 19.5303 11.1088 18.3448C11.0378 18.6533 10.8594 19.306 10.7478 19.7142C10.707 19.8635 10.6751 19.9802 10.6606 20.0353C10.5082 20.6215 10.3516 21.2064 10.1506 21.7773C9.84188 22.6566 9.43221 23.5178 8.90929 24.2904L8.90403 24.2982C8.8745 24.3417 8.83994 24.3925 8.801 24.4439C9.96977 24.8054 11.2118 25 12.4994 25Z" fill="#DE8F75"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="row footerRow generalFooterRow page-block">
                    <div class="col-sm-2 col-12 certificatesCol">
                        <div v-for="certFilePath in certFilesPath">
                            <img v-bind:src="certFilePath">
                        </div>
                    </div>
                    <div class="col-sm-7 col-12 infoFooterSectionContainer">
                        <div class="row">
                            <div class="infoFooterSection">
                                <h5 class="infoFooterSectionTitle primaryFont">
                                    INSTITUCIONAL
                                </h5>
                                <ul class="infoLinkList secondaryFont">
                                    <li class="infoLink secondaryFont">
                                        A Marca
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Lojas
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Contato
                                    </li>
                                </ul>
                            </div>

                            <div class="infoFooterSection">
                                <h5 class="infoFooterSectionTitle primaryFont">
                                    INFORMAÇÕES
                                </h5>
                                <ul class="infoLinkList secondaryFont">
                                    <li class="infoLink secondaryFont">
                                        Formas de Pagamento
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Trocas de Devoluções
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Cuidados com o Produto
                                    </li>
                                </ul>
                            </div>

                            <div class="infoFooterSection">
                                <h5 class="infoFooterSectionTitle primaryFont">
                                    CONHEÇA
                                </h5>
                                <ul class="infoLinkList secondaryFont">
                                    <li class="infoLink secondaryFont">
                                        Franquias e Multimarcas
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Trabalhe com a Gente
                                    </li>
                                    <li class="infoLink secondaryFont">
                                        Procon-RJ
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-12" style="position: relative; top: 0; left: 0; display: flex; justify-content: flex-end;">
                        <div class="circleContainer">
                             <form class="newsletterFooterSection">
                                <div class="textInputContainer newsletterInputContainer secondaryFont">
                                    <label for="nameInput" class="newsletterInputLabel" ref="nameInputLabel">Nome</label>
                                    <input ref="nameInput" type="text" class="textInput" id="nameInput" name="nameInput" @click="nameInputClicked" @blur="nameInputBlurred">
                                </div>
                                <div class="textInputContainer newsletterInputContainer secondaryFont">
                                    <label for="emailInput" class="newsletterInputLabel" ref="emailInputLabel">E-mail</label>
                                    <input ref="emailInput" type="text" class="textInput" id="emailInput" name="emailInput" @click="emailInputClicked" @blur="emailInputBlurred">
                                </div>
                                <button class="btn btn-primary" v-on:click.prevent="subscribeNewsletter">ENVIAR</button>
                            </form>
                            <div ref="successMsg" class="successMsg secondaryFont">
                                Assinado!
                            </div>
                            <div ref="errorMsg" class="errorMsg secondaryFont">
                                Preencha ambos os campos com valores válidos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-footer-bottom flexCenterRow container-fluid">
            <div class="page-block">
                <div class="row">
                    <div class="col-sm-8 col-12 footerText secondaryFont">
                        <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
                        <p>EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</p>
                        <p>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
                    </div>
                    <div ref="brandLogoContainer" id="brandLogoContainer" class="col-sm-4 col-12 footerBrandLogo">
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
        data: function() {
            return {
                socMediaFacebook: process.env.VUE_APP_SOC_MEDIA_FACEBOOK,
                socMediaInstagram: process.env.VUE_APP_SOC_MEDIA_INSTAGRAM,
                socMediaPinterest: process.env.VUE_APP_SOC_MEDIA_PINTEREST,
                certFiles: JSON.parse(process.env.VUE_APP_CERT_FILENAMES)
            }
        },
        computed: {
            certFilesPath: () => {
                let certFiles = JSON.parse(process.env.VUE_APP_CERT_FILENAMES);
                let array = [];
                for (let i = 0; i < certFiles.length; i++) {
                    console.log('../../assets/svg/' + certFiles[i]);
                    let filePath = require('../../assets/svg/' + certFiles[i]);
                    array.push(filePath);
                }
                console.log(array);
                return array;
            }
        },
        methods: {
            subscribeNewsletter() {
                let name = this.$refs.nameInput;
                let email = this.$refs.emailInput;
                if(name.value && email.value) {
                    name.value = "";
                    email.value = "";
                    this.$refs.successMsg.style.display = "block";
                    this.$refs.errorMsg.style.display = "none";
                    this.$refs.nameInputLabel.classList.remove("stopTranslating");
                    this.$refs.nameInputLabel.classList.add("resumeTranslating");
                    this.$refs.emailInputLabel.classList.remove("stopTranslating");
                    this.$refs.emailInputLabel.classList.add("resumeTranslating");
                    return;
                }
                this.$refs.errorMsg.style.display = "block";
                this.$refs.successMsg.style.display = "none";
            },

            nameInputClicked() {
                this.$refs.nameInputLabel.classList.add("stopTranslating");
            },

            emailInputClicked() {
                this.$refs.emailInputLabel.classList.add("stopTranslating");
            },

            nameInputBlurred() {
                if(!this.$refs.nameInput.value) {
                    this.$refs.nameInputLabel.classList.remove("stopTranslating");
                }
            },

            emailInputBlurred() {
                if(!this.$refs.emailInput.value) {
                    this.$refs.emailInputLabel.classList.remove("stopTranslating");
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.$refs.brandLogoContainer) {
                    this.$refs.brandLogoContainer.innerHTML = process.env.VUE_APP_BRANDLOGOFILECODE;
                    this.$refs.brandLogoContainer.childNodes[0].childNodes[0].style.fill = 'white';
                    this.$refs.brandLogoContainer.childNodes[0].style.height = '25px';
                }
                if (this.$refs.facebookAnchor) {
                    this.$refs.facebookAnchor.href = process.env.VUE_APP_SOC_MEDIA_FACEBOOK;
                    this.$refs.facebookAnchor.target = "_blank";
                }
                if (this.$refs.instagramAnchor) {
                    this.$refs.instagramAnchor.href = process.env.VUE_APP_SOC_MEDIA_INSTAGRAM;
                    this.$refs.instagramAnchor.target = "_blank";
                }
                if (this.$refs.pinterestAnchor) {
                    this.$refs.pinterestAnchor.href = process.env.VUE_APP_SOC_MEDIA_PINTEREST;
                    this.$refs.pinterestAnchor.target = "_blank";
                }
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
        .block-footer-top {
            padding-top: 20px;
        }
    }

    .footerText {
        font-size: 12px;
        color: white;
        padding-left:30px;

        p {
            width: 90%;
            text-align: left;
            margin: 3px 0;
        }
    }

    .footerBrandLogo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .socialMediaIcon {
        margin: 0 15px;
    }

    .footerRow {
        position: relative;
    }

    .certificatesCol {
        margin: auto;
        padding: 0;
        div {
            display: inline-block;
            margin: 0 10px;
        }
    }

    .infoFooterSection {
        margin: 0 auto;
    }

    .infoFooterSectionTitle {
        color: $faded-font-color;
        font-size: 12px;
        font-weight: bold;
    }

    .infoLinkList {
        list-style: none;
        padding: 0;

        .infoLink {
            padding: 5px 0 20px 0;
            color: $main-font-color;
            letter-spacing: normal;
            font-size: 14px;
        }
    }

    .circleContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 1 auto;
        max-width: 300px;
        max-height: 300px;
        width: 33vw;
        height: 33vw;
        position: absolute;
        top: -170px;
        right: 0;
        border-radius: 50%;
        border: 2px solid $faded-font-color;
        background-color: white;
        .successMsg {
            display: none;
            margin-top: 10px;
            color: $actionable-color;
            font-size: 14px;
            text-align: center;
            width: 60%;
        }
        .errorMsg {
            display: none;
            margin-top: 10px;
            color: $canceled-color;
            font-size: 14px;
            text-align: center;
            width: 60%;
        }

    }

    .newsletterFooterSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: $faded-font-color;
        vertical-align: middle;
        .newsletterInputContainer {
            text-align: left;
            margin: 5px;
            flex: 1 1 auto;
            .textInput {
                color: $main-font-color;
            }
        }
        button {
            margin-top: 15px;
        }
    }

    .stopTranslating {
        transform: translateY(0);
        font-size: 12px;
    }

    .resumeTranslating {
        transform: translateY(23px);
        font-size: 14px;
    }

    svg {
        transition: all 0.6s ease;
        &:hover {
            transform: scale(1.2) translateY(-5px);
        }
    }
</style>
