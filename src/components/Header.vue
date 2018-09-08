<template>
    <div class="container is-fluid is-marginless">
        <div class="center" >
             <img class="m-t-mdd m-b-mdd" src="../assets/logo.png" alt="Logo original.io" >
        </div>
          <div class="columns is-marginless bordaHeader">
              <div class="column is-2 is-offset-1 is-paddingless">
                <div class="entrar"><a>Entrar</a>&nbsp | &nbsp<a>Cadastrar-se</a></div>
              </div>
              <div class="column is-paddingless is-6">
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
              <input type="text" class="column is-paddingless m-b-sm is-1 buscar" placeholder="Buscar">
  
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


<style lang=scss>
input {
  &.buscar {
    font-family: "Gotham Book";
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-bottom-color: #686868;

  }
}

.column.is-1,
.column.is-2,
.field {
  align-self: center;
}

.entrar {
  color: #686868;
  font-size: 14px;
  display: flex;

  & a {
    color: #363636;
  }
}

.center {
  text-align: center;
  display: block;
  width: 100%;
}
.navbar-item {
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  color: #686868;
}

.bordaHeader {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>