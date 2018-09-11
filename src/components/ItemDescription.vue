<template>
    <div class="description">
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
            <div class="button is-large is-fullwidth is-uppercase add-item m-t-lgg m-b-lg">adicionar à sacola</div>
            <span class="descricao m-t-md">Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</span>
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
      tamanhoSelecionado: null
    };
  },
  methods: {
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
</style>