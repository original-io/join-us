<template>
    <footer>
        <div class="container">
            <div class="footer__form">
                <form action="">
                    <h3>Assine nossa news</h3> <input type="text" placeholder="Nome" required=""> <input type="email" placeholder="E-mail" required=""> <input type="submit" value="Enviar"> </form>
            </div>
            <div class="redes-socias">
                <a href="#" class="facebook"><img src="../assets/footer/facebook.png" alt="facebook"></a>
                <a href="#" class="instagram"><img src="../assets/footer/instagram.png" alt="Instagram"></a>
                <a href="#" class="pinterest"><img src="../assets/footer/pinterest.png" alt="Pinterest"></a>
            </div>
            <div class="footer-info">
                <div class="footer-info-selos">
                    <div class="vtex">
                        <a href="https://www.vtex.com/" target="_blank"><img src="../assets/footer/vtex-pci.jpg" alt="VTEX"></a>
                    </div>
                    <div class="ebit">
                        <a href="https://www.ebit.com.br/" target="_blank"><img src="../assets/footer/selo-ebit.jpg" alt="EBIT"></a>
                    </div>
                </div>
                <div class="footer-info-geral">
                    <h4>INSTITUIÇÃO</h4>
                    <ul style="list-style-type:none">
                        <li><a href="#">A marca</a></li>
                        <li><a href="#">Lojas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-info-geral">
                    <h4>INFORMAÇÕES</h4>
                    <ul style="list-style-type:none">
                        <li><a href="#">Formas de pagamento</a></li>
                        <li> <a href="#">Trocas e Devoluções</a></li>
                        <li><a href="#">Cuidados com o produto</a></li>
                    </ul>
                </div>
                <div class="footer-info-geral">
                    <h4>CONHEÇA</h4>
                    <ul style="list-style-type:none">
                        <li><a href="#">Franquias e Multimarcas</a></li>
                        <li><a href="#">Trabalhe com a gente</a></li>
                        <li><a href="#">Procon - RJ</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-down">
            <div class="footer-down-end">
                <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.</p>
                <p>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100</p>
                <p>CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
            </div>
            <div class="logomenor">
                <div class="footer-logo">
                    <a href="https://www.original.io/" target="_blank"><img src="../assets/logos/logomenor.png" alt="Original.io"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  margin: 150px auto 0 auto;
  max-width: 1280px;
  height: auto;
  position: relative;
  & .container {
    @media screen and (max-width: 1260px) {
      padding-top: 100px;
    }
    @media screen and (max-width: 720px) {
      padding-top: 130px;
    }
    border-top: 1px solid black;
    & .redes-socias {
      padding: 20px 0;
      & a {
        margin: 0 10px;
      }
    }
  }
  & .footer__form {
    position: absolute;
    right: 60px;
    top: 0;
    transform: translateY(calc(-50% + 10px));
    width: 293px;
    height: 293px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: white;
    z-index: 2;
    padding: 50px;
    text-align: center;
    & input[type="text"],
    input[type="email"] {
      margin-top: 10px;
      border: none;
      padding: 10px 5px;
      border-bottom: 2px solid #aeb6c1;
    }
    & input[type="submit"] {
      cursor: pointer;
      margin: 20px auto;
      width: 110px;
      height: 50px;
      color: white;
      text-transform: uppercase;
      border: none;
      background-color: #de8f75;
    }
    & h3 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      font-family: Gotham Book, sans-serif;
      color: #202020;
      line-height: 23px;
    }
    @media screen and (max-width: 1260px) {
      position: absolute;
      right: 0;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 293px;
      height: 293px;
    }
  }
  & .footer-info {
    display: flex;
    padding: 30px 0;
    @media screen and (max-width: 720px) {
      flex-flow: column;
      align-items: center;
    }
    & .footer-info-selos {
      padding: 30px 0;
      width: 20%;
      & .vtex {
        display: inline-block;
        width: 92px;
        height: 58px;
        background-image: url(../assets/footer/vtex-pci.jpg);
        background-size: contain;
        background-position: center;
      }
      & .ebit {
        margin-left: 20px;
        display: inline-block;
        width: 54px;
        height: 58px;
        background-image: url(../assets/footer/selo-ebit.jpg);
        background-size: contain;
        background-position: center;
      }
    }
    & .footer-info-geral {
      width: 20%;
      & h4 {
        font-family: Gotham Book, sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 17px;
        color: #aeb6c1;
        line-height: 30px;
      }
      & a {
        font-size: 15px;
        font-family: Gotham Book, sans-serif;
        text-decoration: none;
        color: #202020;
        line-height: 22px;
      }
    }
  }
  & .footer-down {
    height: 60px;
    background-color: #de8f75;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 90px;
    & .logomenor{
      @media screen and (max-width: 880px) {
        margin: auto;
      }
    }
    & .footer-down-end {
      width: 80%;
      & p {
        font-size: 12px;
        color: white;
        font-family: Open Sans, sans-serif;
      }
      @media screen and (max-width: 880px) {
        margin: auto;
      }
    }
    @media screen and (max-width: 880px) {
      padding-left: 0;
      padding: 5px;
      margin: auto;
      text-align: center;
      height: auto;
    }
  }
}
</style>

