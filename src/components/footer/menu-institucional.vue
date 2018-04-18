<template>
    <ul class="col-2 offset-1">
        <li><h4>Institucional</h4></li>
        <li><a href="#">A Marca</a></li>
        <li><a href="#">Lojas</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</template>

<script>
    export default {}

</script>

<style lang="scss">
    footer {
        > .row {
            > ul {
                list-style: none;
                > li {
                    > h4 {
                        font-family: sans-serif;
                        font-size: 12px;
                        line-height: 17px;
                        font-style: normal;
                        color: #AEB6C1;
                        text-transform: uppercase;
                        margin: 0;
                    }
                    > a {
                        font-size: 14px;
                        line-height: 42px;
                        font-style: normal;
                        color: #202020;
                    }
                }
            }
        }
    }
</style>
