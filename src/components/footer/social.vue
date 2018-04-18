<template>
    <div id="social" class="col-2">
        <a id="icon-facebook" href="#"><img :src="imgFacebook" alt="Facebook" title="Facebook"></a>
        <a id="icon-instagran" href="#"><img :src="imgInsta" alt="Instagran" title="Instagran"></a>
        <a id="icon-subtract" href="#"><img :src="imgSubtract" alt="Subtract" title="Subtract"></a>
        <a id="icon-vtex" href="#"><img :src="imgVtex" alt="vTex" title="vTex"></a>
        <a id="icon-ebit" href="#"><img :src="imgEbit" alt="eBit" title="eBit"></a>        
    </div>
</template>

<script>
    import imgFacebook from '../../assets/img/facebook.png';
    import imgInsta from '../../assets/img/insta.png';
    import imgSubtract from '../../assets/img/Subtract.png';
    import imgVtex from '../../assets/img/vtex.png';
    import imgEbit from '../../assets/img/selo-ebit.png';
    
    

    export default {
        data() {
            return {
                imgFacebook: imgFacebook,
                imgInsta: imgInsta,
                imgSubtract: imgSubtract,
                imgVtex: imgVtex,
                imgEbit: imgEbit
            }
        }
    }

</script>

<style lang="scss">
    footer {
        > .row {
            > div#social {
                > a {
                    position: absolute;
                }
                > a#icon-facebook {
                    top: -49px;
                    left: 71px;
                }
                > a#icon-instagran {
                    top: -49px;
                    left: 113px;
                }
                > a#icon-subtract {
                    top: -49px;
                    left: 167px;
                }
                > a#icon-vtex {
                    top: 27px;
                    left: 71px;
                }
                > a#icon-ebit {
                    top: 27px;
                    left: 195px;
                }
            }
        }
    }

</style>

