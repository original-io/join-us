<template>
    <div id="news">
        <h3>Assine nossa news</h3>
        <form>
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="E-mail">
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="scss">
    footer {
        > .row {
            > div#news {
                background-color: #FFF;
                border: 2px solid #AEB6C1;
                border-radius: 140px;
                height: 273px;
                width: 273px;
                margin: 0;
                padding: 55px 40px 40px 30px;
                position: absolute;
                top: -93px;
                right: 41px;
                > h3 {
                    font-size: 16px;
                    line-height: 23px;
                    text-align: center;
                    font-style: normal;
                    color: #202020;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                > form {
                    > input {
                        border: none;
                        border-bottom: 2px solid #AEB6C1;
                        height: 28px;
                        width: 216px;
                        font-size: 14px;
                        color: #202020;
                        margin: 0 0 15px 0;
                    }
                    > button {
                        height: 50px;
                        width: 110px;
                        color: #fff;
                        background-color: #DE8F75;
                        font-size: 14px;
                        line-height: 23px;
                        text-align: center;
                        font-style: normal;
                        border: none;
                        border-radius: 3px;
                        margin-left: 25%;
                    }
                }
                
            }
        }
    }
</style>
