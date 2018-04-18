<template>
    <b-navbar toggleable="md">
        <b-navbar-toggle target="menu-header"></b-navbar-toggle>        
        <b-collapse is-nav id="menu-header">
            <b-navbar-nav id="logar" class="mr-auto">
                <b-nav-item href="#">Entrar</b-nav-item>
                <li class="separador">|</li>
                <b-nav-item href="#">Cadastre-se</b-nav-item>
            </b-navbar-nav>
            
            <b-navbar-nav id="menu-principal" class="mx-auto">
                <b-nav-item-dropdown text="Sapatos">
                    <b-dropdown-item href="#">Sapatos 1</b-dropdown-item>
                    <b-dropdown-item href="#">Sapatos 2</b-dropdown-item>
                    <b-dropdown-item href="#">Sapatos 3</b-dropdown-item>
                    <b-dropdown-item href="#">Sapatos 4</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Bolsas">
                    <b-dropdown-item href="#">Bolsas 1</b-dropdown-item>
                    <b-dropdown-item href="#">Bolsas 2</b-dropdown-item>
                    <b-dropdown-item href="#">Bolsas 3</b-dropdown-item>
                    <b-dropdown-item href="#">Bolsas 4</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Acessórios">
                    <b-dropdown-item href="#">Acessórios 1</b-dropdown-item>
                    <b-dropdown-item href="#">Acessórios 2</b-dropdown-item>
                    <b-dropdown-item href="#">Acessórios 3</b-dropdown-item>
                    <b-dropdown-item href="#">Acessórios 4</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Off</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav id="busca" class="ml-auto">
                <b-nav-form>
                    <b-button type="submit"></b-button>
                    <b-form-input placeholder="Busca"/>
                </b-nav-form>
                <span>0</span>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

    <!-- navbar-1.vue -->
</template>

<script>
    import imgSacola from '../../assets/img/sacola.png';
    
    export default {
        data() {
            return {
                imgSacola: imgSacola
            }
        }
    }
</script>

<style lang="scss">
    nav {
        border-top: 1px solid #CCC;
        border-bottom: 1px solid #CCC;
        font-style: normal;
        line-height: 20px;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        > div#menu-header {
            > ul > li > a {
                color: #686868;
                padding-top: 14px;
                padding-bottom: 14px;
                &:hover {
                    background-color: #EBEBEB;
                }
            }
            > ul#logar {
                font-size: 12px;
                text-align: left;
                >.separador {
                    padding: 12px 0;
                }
            }
            > ul#menu-principal {
                text-transform: uppercase;
                font-size: 14px;
                text-align: center;
                
                > li.dropdown {
                    position: initial;
                    > .dropdown-menu {
                        width: 100%;
                        border-radius: 0px;
                        margin-top: 1px;
                        border: none;
                        text-align: center;
                    }
                    
                }
                
                
                
            }
            > ul#busca {                
                input {
                    border-radius: 0;
                    border-top: none;
                    border-bottom: 1px solid rgba(104, 104, 104, 0.4);
                    border-left: none;
                    border-right: none;
                    width: 83px;
                    padding-right: 10px;
                    font-size: 12px;
                    text-align: right;
                }
                button {
                    border: none;
                    width: 21px;
                    height: 21px;
                    background: transparent url('/src/assets/img/lupa.png') no-repeat 0px 0px;
                    margin-right: -25px;
                    z-index: 9;
                }
                > span {
                    font-size: 12px;
                    width: 50px;
                    background: transparent url('/src/assets/img/sacola.png') no-repeat 0px 0px;
                    padding: 6px 0 0 35px;
                    margin: 0 20px;
                }
            }
        }
    }
</style>