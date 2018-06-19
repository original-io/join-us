<template lang="pug">
  div
    .text-center
      router-link(to="/")
        img.my-3(src="@/assets/banner.svg")
    hr.mt-0
    .container
      .row
        .col-lg-4.mb-3.mb-lg-0.text-center.text-lg-left.align-self-center
          router-link.text-secondary(to="/") Entrar
          span.mx-1 |
          router-link.text-secondary(to="/") Cadastre-se
        .col-lg-4.mb-3.mb-lg-0.text-center.align-self-center
          .list-inline
            .list-inline-item
              router-link.text-secondary.text-uppercase(to="/sapatos") Sapatos
            .list-inline-item
              router-link.text-secondary.text-uppercase(to="/bolsas") Bolsas
            .list-inline-item
              router-link.text-secondary.text-uppercase(to="/acessorios") Acessórios
            .list-inline-item
              router-link.text-secondary.text-uppercase(to="/off") Off
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
</template>
