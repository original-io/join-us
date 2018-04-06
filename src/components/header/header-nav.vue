<template>
  <nav class="testnav">
    <ul class="login">
      <li>Entrar</li>
      <li>Cadastrar-se</li>
    </ul>
    <ul class="navlinks">
      <li>Sapatos</li>
      <li>Bolsas</li>
      <li>Acessórios</li>
      <li>Off</li>
    </ul>
    <ul class="useractions">
      <li>
        <i class="icon fas fa-search"></i>
        <input class="searchfield"/>
      </li>
      <li>
        <i class="icon fas fa-shopping-bag"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'header-navigation',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    text-transform: uppercase;
  }
  li {
    cursor: pointer;
    transition: 0.5s;
  }
  li:hover {
    color: gray;
  }
  input {
    outline-style: none;
    border: none;
    border-bottom: 2px solid #E0E2E0;
    background: linear-gradient(transparent, #FCFCFC);
  }
  .testnav {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
    'login'
    'navlinks'
    'useractions'
  }
  .testnav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .login {
    display: grid;
    grid-area: login;
  }
  .login li {
    border-bottom: 1px solid #E0E2E0;
    width: 100%;
    text-align: center;
  }
  .navlinks {
    display: grid;
    grid-area: navlinks;
  }
  .navlinks li{
    border-bottom: 1px solid #E0E2E0;
    width: 100%;
    text-align: center;
  }
  .useractions {
    display: grid;
    grid-area: useractions;
    grid-template-columns: 1fr 1fr;
  }
  .useractions li{
    width: 100%;
    text-align: center;
  }
  @media (min-width: 550px) {
    .testnav {
      grid-template-areas:
      'login navlinks'
      'useractions useractions'
    }
    .useractions {
      grid-template-columns: 200px 1fr;
    }
  }
  @media (min-width: 650px) {
    .testnav {
      padding: 10px;
    }
    .login {
      font-size: 10px;
      grid-template-columns: auto auto;
    }
    .navlinks {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 790px) {
    .testnav {
      grid-template-columns: 200px auto 250px;
      grid-template-areas: 'login navlinks useractions';
      border: 1px solid #E0E2E0;
    }
    .login li{
      border: none;
    }
    .navlinks li{
      border: none;
    }
  }</style>
