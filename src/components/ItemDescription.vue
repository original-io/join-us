<template>
  <div class="columns">
    <div class="p-md column is-half">
        <img class="p-l-md" width="450px" height="600px" src="@/assets/produtos/sandalias.png" alt="sandalias">
    </div>
    <div class="column is-half description">
        <div class="description--bordaSolid p-md">
            <h2 class="is-uppercase has-text-weight-bold is-size-4 has-text-black-bis m-b-xs">Rasteira tira dedo</h2>
            <p class="m-b-md">RT 0568 | 03.07.0653</p>
            <div class="produtoValor m-b-lg">
                <span><strike class="anterior m-r-xs">R$ 69,00</strike> |</span> 
                <span class="atual is-size-5 m-l-md">R$ 55,20</span>
                <p class="produtoValor--gray is-size-7">Ou 6x de R$ 9,20</p>
            </div>
            <div class="produtoCores m-b-md">
                <p>Cor: <span>(Fucsia)</span></p>
                <div ref="selecaoCor" :style="{ backgroundColor: cor}" v-for="(cor, index) in cores" :key="cor" @click="selecionarCor(index)" class="produtoCores__opcao cores">
                </div>
            </div>
            <p class="columns p-b-none m-b-none">
                <span class="column">Tamanho: (37)</span> <span><a class="column">Guia de Medidas</a></span>
            </p>
            <div ref="selecaoTamanho" v-for="index in 10" :key="index" class="produtoCores__opcao tamanho m-xs" @click="selecionarTamanho(index)">
                <span class="has-text-weight-bold">{{32+index}}</span>
            </div>
            <div class="button is-large is-fullwidth is-uppercase add-item m-t-lgg m-b-lg" @click="ativarModal">adicionar à sacola</div>
              <div ref="modalSucess" class="modal">
                <div class="modal-card">
                        <div id="modalFechar" @click="removeModal" class="close"></div>
                  <section class="modal-card-body p-l-xl p-r-xl p-t-lg p-b-md">
                        <img class="m-l-md" src="@/assets/produtos/prod05.png" >
                        <h2>adicionado com sucesso</h2>
                        <div class="button is-large is-fullwidth is-uppercase">finalizar compra</div>
                        <a class="p-l-xl p-r-xl" href="#">Continuar comprando</a>
                  </section>
                </div>
              </div>
            <span class="descricao m-t-md">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data: function() {
    return {
      cores: ["#A9095E", "#5f75aa", "#A14830", "#000000"],
      corSelecionada: null,
      tamanhoSelecionado: null,
      isCardModalActive: false
    };
  },
  methods: {
    removeModal(){
      let modal = this.$refs.modalSucess;
      modal.classList.remove("is-active");
    },
    ativarModal(){
      let modal = this.$refs.modalSucess;
      modal.classList.add("is-active");
    },
    selecionarCor(index) {
      let corNova = this.$refs.selecaoCor[index].style;
      if (this.corSelecionada != null) {
        let corAntiga = this.$refs.selecaoCor[this.corSelecionada].style;
        corAntiga.border = "6px solid #fff";
      }
      this.corSelecionada = index;
      corNova.border = "6px solid #E0DA9C";
    },

    selecionarTamanho(index) {
      let tamanhoNovo = this.$refs.selecaoTamanho[index - 1].style;
      if (this.tamanhoSelecionado != null) {
        let tamanhoAntigo = this.$refs.selecaoTamanho[this.tamanhoSelecionado]
          .style;
        tamanhoAntigo.backgroundColor = "#EBEBEB";
      }
      this.tamanhoSelecionado = index - 1;
      tamanhoNovo.backgroundColor = "#E0DA9C";
    }
  }
};
</script>

<style scoped lang="scss">
.modal-card-body{
  & a{
    color: #AEB6C1;
    font-size: 14px;
    text-decoration: none !important;
    line-height: 20px;
    text-decoration: none;
    display: block;
    margin: 20px auto;
  }
  & h2{
    font-size: 22px;
    color: #DE8F75;
    font-family: Gotham Book, sans-serif;
    line-height: 31px;
    text-transform: uppercase;
    padding: 20px 0;
  }
}
.modal-content, .modal-card {
    width: fit-content !important;
}
.description {
  &--bordaSolid {
    border: 2px solid #ccc;
  }
  & .produtoValor {
    & .anterior {
      color: #e35442;
      font-family: Open Sans, sans-serif;
    }
    & .atual {
      font-weight: 600;
      color: #686868;
    }
    &--gray {
      color: #7f7f7f;
    }
  }
  & .produtoCores {
    & span {
      color: #5f75aa;
      margin-bottom: 0.25 rem;
    }
    &__opcao {
      cursor: pointer;
      display: inline-block;
      border-radius: 50%;
      &.cores {
        width: 32px;
        border: 6px solid #fff;
        height: 32px;
      }
      &.tamanho {
        width: 34px;
        height: 34px;
        background-color: #ebebeb;
        text-align: center;
        & span {
          line-height: 34px;
          font-size: 14px;
          color: #2a5a75;
        }
      }
    }
  }
  & a {
    text-decoration: underline;
  }
  & .button.is-large {
    padding: 35px;
    font-size: 18px;
    background-color: #32917b;
    color: #ffffff;
  }
  & span.descricao {
    font-size: 14px;
  }
}

.close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    background-image: url(../assets/close.png);
    background-size: contain;
}

</style>