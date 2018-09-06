<template>
    <div class="container is-fluid is-marginless">
        <div class="center" >
             <img class="m-t-mdd m-b-mdd" src="../assets/logo.png" alt="Logo original.io" >
        </div>
          <div class="columns is-marginless bordaHeader">
              <div class="column is-2">
              <div class="columns is-marginless ">
              <div class="column is-paddingless m-l-md entrar"><a>Entrar</a>  |   <a>Cadastrar-se</a></div>
            </div>

              </div>
              <div class="column is-paddingless is-8">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                  <div id="navbarBurger" class="navbar-burger m-t-sm m-b-sm" data-target="navMenu" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <div class="nav-center navbar-menu">
                      <a v-for="item in items" :key="item" class="is-tab is-hidden-desktop navbar-item">{{item}}</a>    
                  </div>

                  <div id="navMenu"   class="nav-right navbar-menu">
                      <a v-for="item in items" :key="item" class="is-tab is-hidden-touch navbar-item m-r-sm m-l-md">{{item}}</a>
                  </div>
                </nav>
              </div>
              <div class="column is-paddingless m-b-sm is-1 buscar">
                 <font-awesome-icon icon="search" />
                  <span>&nbsp Buscar</span>
              </div>
              <div class="column is-paddingless m-b-sm m-l-xs is-1">
               
                <font-awesome-icon icon="shopping-bag" /> 0
              </div>
          </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: ["Sapatos", "Bolsas", "Acessórios", "Off"]
    };
  }
};
</script>


<style>
.buscar {
  border-bottom: 2px solid #353535;
}

.column.is-1,
.column.is-2,
.field {
  align-self: center;
}

.entrar {
  color: #686868;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  display: flex;
}

.center {
  text-align: center;
  display: block;
  width: 100%;
}
.navbar-item {
  text-decoration: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  color: #686868;
}

.bordaHeader {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>