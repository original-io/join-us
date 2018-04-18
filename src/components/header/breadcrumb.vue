<template>
    <b-breadcrumb :items="items"/>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: 'Home',
        href: '/'
      }, {
        text: 'Sapatos',
        active: true
      }]
    }
  }
}
</script>

<style lang="scss">
    .breadcrumb {
        padding-top: 7px;
        padding-bottom: 7px;
        background-color: rgba(255, 255, 255, 0.9);
        > li {
            > a, span {
                font-style: normal;
                font-size: 12px;
                line-height: 20px;
                text-align: left;
                color: #AEB6C1;
            }
            > span {
                font-weight: bold;
            }
        }        
    }
</style>