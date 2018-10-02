<template lang="pug">
  div
    .container
      .row
        .col-lg-6.mb-3.mb-lg-0
          .row
            .col-2.text-center
              .small Vídeo
              .d-block
                .btn.text-primary
                  .far.fa-play-circle.fa-2x
              .d-block
                .btn
                  .fa.fa-angle-up.fa-2x
              .mb-3(v-for="(image, index) in item.images" :class="{'opacity-50': index != 0}")
                img.w-100(:src="image")
              .btn
                .fa.fa-angle-down.fa-2x
            .col
              img.w-100(:src="item.images[0]")
        .col-lg-6
          .border.rounded.p-3.h-100
            h3.text-uppercase.font-weight-bold {{item.name}}
            .mb-3 RT 0568 | 03.07.0653
            .d-inline-block
              s.text-danger R$ {{item.price.toFixed(2)}}
              span.text-danger.mx-1 |
            .d-inline-block
              h4.font-weight-bold R$ {{(item.price * (1 - item.discount)).toFixed(2)}}
            p.small.text-secondary ou {{item.installments}}x de R$ {{item.priceInstallments.toFixed(2)}}
            .mb-3
              span Cor:
              .list-inline
                .list-inline-item(v-for="color in item.colors")
                  button.btn.rounded-circle.p-2(:class="'btn-' + color")
            .mb-3
              .float-right
                u
                  u.text-danger Guia de medidas
              span Tamanho:
              .list-inline
                .list-inline-item(v-for="size in item.sizes")
                  button.btn.rounded-circle.p-1 {{size}}
            .mb-3
              button.btn.btn-block.btn-success(data-toggle="modal" data-target="#exampleModalCenter")
                .text-uppercase.py-3 Adicionar à Sacola
              #exampleModalCenter.modal.fade(tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true")
                .modal-dialog.modal-dialog-centered(role="document")
                  .modal-content
                    .modal-body
                      button.close(type="button" data-dismiss="modal" aria-label="Close")
                        span(aria-hidden="true") ×
                      .text-center
                        img.img-fluid(:src="item.images[0]")
                        .mb-3
                          h3.text-uppercase.font-weight-bold.text-burning-sand Adicionado com sucesso!
                        .mb-3
                          button.btn.btn-block.btn-success
                            .text-uppercase.py-2 Finalizar compra
                        u.text-secondary(data-dismiss="modal" aria-label="Close") Continuar comprando
            span {{item.description}}
    hr
    Recommendations
</template>

<script>
import Recommendations from "@/components/Recommendations"

export default {
  data() {
    return {
      item: {
        name: "Rasteira Tira Dedo",
        price: 69,
        discount: .2,
        installments: 6,
        priceInstallments: 9.2,
        colors: ["jazzberry-jam", "waikawa-gray", "medium-carmine", "dark"],
        sizes: [33,34,35,36,37,38,39,40,41,42],
        description: "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.",
        images: [
          require("@/assets/prod02.jpg"),
          require("@/assets/prod02.jpg"),
          require("@/assets/prod02.jpg"),
          require("@/assets/prod02.jpg"),
        ]
      }
    }
  },
  components: {
    Recommendations
  }
}
</script>
