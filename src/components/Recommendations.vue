<template lang="pug">
  .container
    .mb-3
      h3.text-uppercase.text-center.text-burning-sand Quem viu, viu também
    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0(v-for="item in items")
        .position-relative
          .position-absolute.p-3.text-burning-sand.opacity-75(style="top:0; right: 0")
            button.btn.btn-light.rounded-circle.border.border-burning-sand.p-2.m-0
              .fa.fa-plus.fa-2x.text-burning-sand
          img.w-100(:src="item.img")
        .float-right
          .list-inline
            .list-inline-item(v-for="color in item.colors")
              button.btn.rounded-circle.p-2(:class="'btn-' + color")
        .text-left R$ {{item.price.toFixed(2)}}
    .text-center.list-inline
      .list-inline-item
        .btn
          .far.fa-arrow-alt-circle-left.fa-2x
      .list-inline-item
        span 1 de 10
      .list-inline-item
        .btn
          .far.fa-arrow-alt-circle-right.fa-2x
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("@/assets/prod03.jpg"),
          price: 204.9,
          colors: ["jazzberry-jam", "waikawa-gray", "medium-carmine", "dark"]
        },
        {
          img: require("@/assets/prod04.jpg"),
          price: 204.9,
          colors: ["jazzberry-jam", "waikawa-gray", "medium-carmine", "dark"]
        },
        { img: require("@/assets/prod02.jpg"), price: 204.9, colors: [] },
        {
          img: require("@/assets/prod01.jpg"),
          price: 204.9,
          colors: ["waikawa-gray", "medium-carmine", "dark"]
        }
      ]
    };
  }
};
</script>
