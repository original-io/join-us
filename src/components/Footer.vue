<template lang="pug">
  div
    .container.mb-3.text-center.text-lg-left
      .position-relative
        .position-absolute.p-5.border.rounded-circle.bg-white(style="right:0; transform: translateY(calc(-50%))")
          form
            .text-uppercase.font-weight-bold Assine nossa news
            input.form-control.mb-3.border-top-0.border-left-0.border-right-0(type="text" placeholder="Nome" required)
            input.form-control.mb-3.border-top-0.border-left-0.border-right-0(type="email" placeholder="E-mail" required)
            button.btn.btn-outline-burning-sand.form-control.mb-3 Enviar
      .list-inline
        .list-inline-item
          .btn
            .fab.fa-facebook-f.fa-2x.text-burning-sand
        .list-inline-item
          .btn
            .fab.fa-instagram.fa-2x.text-burning-sand
        .list-inline-item
          .btn
            .fab.fa-pinterest.fa-2x.text-burning-sand
      .row
        .col-lg-2.align-self-center.text-center.mb-3.mb-lg-0
          .list-inline
            .list-inline-item
              img.w-100(src="@/assets/vtex-pci-200.png")
            .list-inline-item
              img.w-100(src="@/assets/selo-ebit.png")
        .col-lg-auto.mb-3.mb-lg-0
          .text-uppercase.font-weight-bold.text-secondary Institucional
          router-link.text-secondary.d-block(to="/") A Marca
          router-link.text-secondary.d-block(to="/") Lojas
          router-link.text-secondary.d-block(to="/") Contato
        .col-lg-auto.mb-3.mb-lg-0
          .text-uppercase.font-weight-bold.text-secondary Informações
          router-link.text-secondary.d-block(to="/") Formas de Pagamento
          router-link.text-secondary.d-block(to="/") Trocas e Devoluções
          router-link.text-secondary.d-block(to="/") Cuidados com o Produto
        .col-lg-auto.mb-3.mb-lg-0
          .text-uppercase.font-weight-bold.text-secondary Conheça
          router-link.text-secondary.d-block(to="/") Franquias e Multimarcas
          router-link.text-secondary.d-block(to="/") Trabalhe com a Gente
          router-link.text-secondary.d-block(to="/") Procon-RJ
    .bg-burning-sand
      .container
        .row
          .col-lg-9.mb-3.mb-lg-0
            .text-white Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
            .text-white Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
            .text-white CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
          .col-lg-3.text-center.text-lg-right.align-self-center
            img(src="@/assets/banner-white.svg")
</template>
