<template>
    <div class="container is-fluid is-marginless">
        <div class="center" >
             <img class="m-t-mdd m-b-mdd" src="../assets/logo.png" alt="Logo original.io" >
        </div>
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
                <a v-for="item in items" :key="item" class="is-tab is-hidden-touch navbar-item m-r-sm m-l-sm">{{item}}</a>
            </div>
        </nav>
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
.center {
  text-align: center;
  display: block;
  width: 100%;
}
.navbar-item {
  color: black;
  text-decoration: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #686868;
}
.navbar .navbar-brand > .navbar-item,
.navbar .navbar-brand .navbar-link {
  display: inline-block;
}
.navbar {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
