<template>
  <div class="is-marginless">
    <div class="center"> <img class="m-t-mdd m-b-mdd" src="../assets/logos/logo.png" alt="Logo original.io"> </div>
    <div class="columns is-marginless bordaHeader">
      <div class="column is-2 is-offset-1 is-paddingless">
        <div class="entrar"><a>Entrar</a>&nbsp | &nbsp<a>Cadastrar-se</a></div>
      </div>
      <div class="column is-paddingless is-6">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBurger" class="navbar-burger m-t-sm m-b-sm" data-target="navMenu" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');"> <span></span> <span></span> <span></span> </div>
          <div class=" nav-center navbar-menu"> <a v-for="item in items" :key="item" class="is-tab is-hidden-desktop navbar-item">{{item}}</a> </div>
          <div id="navMenu" class="nav-right navbar-menu"> <a v-for="item in items" :key="item" class="is-tab is-hidden-touch navbar-item m-r-sm m-l-md">{{item}}</a> </div>
        </nav>
      </div>
      <div class="column is-paddingless is-2 is-hidden-touch">
        <div class="columns is-paddingless">
          <fieldset class>
            <input class="column" type="text" id="buscar"  placeholder="Buscar">
            <a class="search-btn" href="">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M8.51703 0C3.81321 0 0 3.8131 0 8.51695C0 13.2208 3.81321 17.0342 8.51703 17.0342C10.4706 17.0342 12.2704 16.3766 13.7074 15.2705L19.1132 20.6762C19.5448 21.1079 20.2447 21.1079 20.6763 20.6762C21.1079 20.2447 21.1079 19.5448 20.6763 19.1133L15.2704 13.7073C16.3764 12.2704 17.0341 10.4706 17.0341 8.51695C17.0341 3.8131 13.2209 0 8.51703 0ZM2.21053 8.51695C2.21053 5.03413 5.03404 2.21053 8.51703 2.21053C12 2.21053 14.8235 5.03413 14.8235 8.51695C14.8235 12 12 14.8236 8.51703 14.8236C5.03404 14.8236 2.21053 12 2.21053 8.51695Z"></path>
									</svg>
								</a>
          </fieldset>
          <div class="column is-paddingless m-l-md is-2"> <img src="@/assets/svg/icon-cart.svg"> <span>{{bag}}</span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      bag: 0,
      items: ["Sapatos", "Bolsas", "Acessórios", "Off"]
    };
  }
};
</script>

<style lang=scss>
.iconBusca {
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: #686868;
}
.search-btn {
  position: absolute;
  left: 20px;
  top: 6px;
}
.search-btn svg path {
  fill: #686868;
}
.search-btn svg {
  width: 25px;
  height: auto;
}
fieldset {
  border: 0;
  position: relative;
}

input {
  font-family: "Gotham Book";
  &.column.is-1 {
    width: 70px;
  }
  &#buscar {
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    padding-left: 50px;
    border-bottom: 1px solid #c3c3c3;
    width: 120px;
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