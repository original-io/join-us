<template>
    <div class="col-6">
        
        
        
        
        
        <b-carousel id="carousel-produtos" indicators v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide>
                <img slot="img" src="https://lorempixel.com/430/556/technics/1/" alt="Testando...">
            </b-carousel-slide>
            <b-carousel-slide>
                <img slot="img" src="https://lorempixel.com/430/556/technics/2/" alt="Testando...">
            </b-carousel-slide>
            <b-carousel-slide>
                <img slot="img" src="https://lorempixel.com/430/556/technics/3/" alt="Testando...">
            </b-carousel-slide>
        </b-carousel>
       
        
    </div>

        
        
        
        
      <!--  
    <b-carousel id="carousel1"
                style=""
                controls
                indicators
                :interval="4000"
                img-width="430"
                img-height="556"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
        <b-carousel-slide>
            <img slot="img" src="https://lorempixel.com/430/556/technics/1/" alt="Testando...">
        </b-carousel-slide>
        <b-carousel-slide>
            <img slot="img" src="https://lorempixel.com/430/556/technics/2/" alt="Testando...">
        </b-carousel-slide>
        <b-carousel-slide>
            <img slot="img" src="https://lorempixel.com/430/556/technics/3/" alt="Testando...">
        </b-carousel-slide>

                
    </b-carousel>
        

    
  </div>
      -->
</template>

<script>
    import imgFacebook from '../../assets/img/facebook.png';

    export default {
        props: {
            img: { type: String, default: null }
        },
        data() {
            return {
                imgFacebook: imgFacebook,
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        }
    }

</script>

<style lang="scss">
    
</style>

