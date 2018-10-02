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
          .dropdown.w-100
            #dropdownMenuButton.list-inline(data-toggle="dropdown")
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
            .dropdown-menu.p-3
              h3.text-uppercase.text-burning-sand Sacola
              .text-secondary 5 itens
              hr
              .row.mb-3(v-for="(item, index) in cart")
                .col-3
                  img.img-fluid(:src="item.img")
                .col-3
                  .d-block {{item.name}}
                  .font-weight-bold R$ {{item.price.toFixed(2)}}
                .col-3
                  .btn.btn-secondary
                    .fa.fa-minus
                  input.form-control(v-model="item.quantity")
                  .btn.btn-secondary
                    .fa.fa-plus
                .col-3
                  .btn(@click="cart.splice(index, 1)")
                    .fa.fa-times
      #accordion
        #sapatos.collapse(data-parent="#accordion")
          .row
            .col-lg-2.text-center(v-for="(shoe, index) in shoes" :class="{'offset-lg-1': index % 5 == 0}")
              a.text-burning-sand(href)
                img(:src="shoe.image")
                p {{shoe.name}}
        #bolsas.collapse(data-parent="#accordion")
          .row
            .col-lg-4.text-center
              img.mb-3(src="@/assets/Bol sas.png")
              .mb-3
                button.btn.btn-outline-burning-sand
                  .text-uppercase Ver todas
            .col-lg-4
              .mb-3(v-for="bolsa in bolsas")
                a.text-burning-sand(href) {{bolsa.name}}
            .col-lg-4.text-center
              img.img-fluid(src="@/assets/banner-menu2.png")
        #acessorios.collapse(data-parent="#accordion")
          .row
            .col-lg-4.text-center
              img.mb-3(src="@/assets/aces só rios.png")
              .mb-3
                button.btn.btn-outline-burning-sand
                  .text-uppercase Ver todas
            .col-lg-4
              .mb-3(v-for="acessorio in acessorios")
                a.text-burning-sand(href) {{acessorio.name}}
            .col-lg-4.text-center
              img.img-fluid(src="@/assets/banner-menu.png")
</template>

<script>
import $ from "jquery"

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
      ],
      bolsas: [
        {name: "bolsas pequenas"},
        {name: "bolsas grandes"},
        {name: "bolsas de tecido"},
        {name: "bolsas maleta"},
        {name: "bolsas saco"},
        {name: "mochilas"},
        {name: "malas"},
      ],
      acessorios: [
        {name: "Bijoux"},
        {name: "Carteiras"},
        {name: "Cintos"},
        {name: "Necessaires"},
        {name: "Organizadores"},
        {name: "Pros Dias de Sol"},
        {name: "Leve Por Aí"},
        {name: "É Tendência"},
      ],
      cart: [
        {name: "rasteira tira dedo", price: 49.9, quantity: 1, img: require("@/assets/prod02.jpg")},
        {name: "rasteira tira dedo", price: 49.9, quantity: 1, img: require("@/assets/prod02.jpg")},
        {name: "bolsa tresse rolote", price: 49.9, quantity: 1, img: require("@/assets/prod02.jpg")},
        {name: "rasteira tira dedo", price: 49.9, quantity: 1, img: require("@/assets/prod02.jpg")},
      ]
    }
  },
  mounted() {
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
  }
}
</script>
