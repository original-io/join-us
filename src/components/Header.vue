<template lang="pug">
  div
    .text-center
      router-link(to="/")
        img.my-3(src="@/assets/banner.svg")
    hr.mt-0
    .container
      .row.mb-3
        .col-lg-4.mb-3.mb-lg-0.text-center.text-lg-left.align-self-center
          router-link.text-secondary(to="/") Entrar
          span.mx-1 |
          router-link.text-secondary(to="/") Cadastre-se
        .col-lg-4.mb-3.mb-lg-0.text-center.align-self-center
          .list-inline
            .list-inline-item
              a.text-secondary.text-uppercase(data-toggle="collapse" href="#sapatos") Sapatos
            .list-inline-item
              a.text-secondary.text-uppercase(data-toggle="collapse" href="#bolsas") Bolsas
            .list-inline-item
              a.text-secondary.text-uppercase(data-toggle="collapse" href="#acessorios") Acessórios
            .list-inline-item
              a.text-secondary.text-uppercase(data-toggle="collapse" href="#off") Off
        .col-lg-4.mb-3.mb-lg-0.text-center.text-lg-right
          .list-inline
            .list-inline-item
              .input-group.mb-2
                .input-group-prepend.border-bottom
                  .input-group-text.bg-white.border-0
                    .fa.fa-search
                input.form-control.border-top-0.border-left-0.border-right-0(placeholder="busca")
            .list-inline-item
              .btn.btn-light
                .list-inline
                  .list-inline-item
                    .fa.fa-shopping-bag
                  .list-inline-item
                    .font-weight-bold 0
      #sapatos.collapse
        .row
          .col-lg-2.text-center(v-for="(shoe, index) in shoes" :class="{'offset-lg-1': index % 5 == 0}")
            a.text-burning-sand(href)
              img(:src="shoe.image")
              p {{shoe.name}}
      #bolsas.collapse
        .card
          .card-body
            span Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      #acessorios.collapse
        .card
          .card-body
            span Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      #off.collapse
        .card
          .card-body
            span Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
</template>

<script>
export default {
  data() {
    return {
      shoes: [
        {name: "rasteiras", image: require("@/assets/rasteiras.svg")},
        {name: "sapatilhas", image: require("@/assets/sapatilha.svg")},
        {name: "alpargatas", image: require("@/assets/alpargatas.svg")},
        {name: "mocassins", image: require("@/assets/Mocassins.svg")},
        {name: "tênis", image: require("@/assets/tênis.svg")},
        {name: "botas", image: require("@/assets/botas.svg")},
        {name: "salto anabela", image: require("@/assets/anabela.svg")},
        {name: "salto plataforma", image: require("@/assets/plataforma.svg")},
        {name: "salto alto", image: require("@/assets/Salto alto.svg")},
        {name: "salto médio", image: require("@/assets/salto médio.svg")},
      ]
    }
  }
}
</script>
