<template>
  <div class="newsletter">
    <div class="newsletter-text">
      <p>Assine nossa news</p>
      <label for="nome">Nome</label>
      <input type="text" placeholder="Renata">
      <label for="Email">Email</label>
      <input type="text" placeholder="exemplo@email.com">
      <button>ENVIAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-newsletter',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  button {
    position: relative;
    outline-style: none;
    border: none;
    cursor: pointer;
    width: 35%;
    padding: 10px;
    margin-top: 10px;
    background-color: tomato;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
  }
  label {
    font-size: 0.6em;
    position: relative;
    top: -20px;
    left: 25px;
    color: gray;
  }
  input {
    border: none;
    outline: none;
    border-bottom: 2px solid gray;
    width: 75%;
    margin-top: 20px;
  }
  .newsletter{
    width: 200px;
    height: 200px;
    position: absolute;
    top: -30px;
    right: 5px;
    border: 1px solid gray;
    border-radius: 350px;
    background: #FFF;
  }
  .newsletter-text {
    position: relative;
    text-align: center;
    top: 20px;
    left: -4px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 12px;
  }
  @media(min-width: 560px) {
    button {
      width: 35%;
      padding: 15px;
      margin-top: 20px;
      left: 10px;
    }
    label {
      font-size: 0.5em;
      left: 47px;
    }
    input {
      margin-top: 30px;
    }
    .newsletter {
      width: 350px;
      height: 350px;
      top: -80px;
    }
    .newsletter-text {
      top: 50px;
      left: -10px;
      font-size: 1.6em;
    }
  }
  @media(min-width: 1000px) {
    button {
      width: 55%;
      padding: 20px;
      margin-top: 50px;
      left: 30px;
    }
    label {
      font-size: 15px;
      left: 55px;
    }
    .newsletter {
      width: 420px;
      height: 420px;
      top: -130px;
      right: 35px;
      border-radius: 210px;
    }
    .newsletter-text {
      top: 50px;
      left: -30px;
      font-size: 1.6em;
    }
  }
</style>
