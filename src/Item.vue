<template>
<div>
    <Header />
      <nav class="breadcrumb breadcrumb--alignHeader" >
        <ul>
          <li class="breadcrumb__sideItems">
            <a>Home</a>
          </li>  
          <li class="breadcrumb__sideItems">
            <a><b>Sapatos</b></a>
          </li>
        </ul>
      </nav>
    <!-- Conteudo -->
    <div class="columns is-marginless is-paddingless">
      <side-items class="column is-1 is-offset-1
       m-t-sm m-r-md"/>
       <Item-description class="column is-marginless is-paddingless is-8 is-offset-1" />
    </div>
    <div class="colums is-marginless is-paddingless">
       <Other-Items class="column is-10 is-offset-1" />
    </div>
    <Footer />
    </div>
</template>

<script>
//componentes
import Header from "./components/Header";
import SideItems from "./components/SideItems";
import ItemDescription from "./components/ItemDescription";
import OtherItems from "./components/OtherItems";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    SideItems,
    ItemDescription,
    OtherItems,
    Footer
  }
};
</script>