<template>
  <nav class="navbar">
        <a href="#">
            <img src="imagens/Logo.png" title="JDC Perícias" alt="JDC Perícias">
        </a>
        <button type="button" data-toggle="collapse" data-target="#menuItens"><span></span></button>                    
        <div class="collapse" id="menuItens">
            <ul>
                <li>
                    <a href="#topo">Home</a>
                </li>
                <li>
                    <a href="#areaAtuacao">Área de atuação</a>
                </li>
                <li>
                    <a class="ativo" href="#quemSomos">Quem somos</a>
                </li>
                <li>
                    <a href="#faleConosco">Fale conosco</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
	name: 'minha-navegacao'
}
</script>

<style lang="scss">
  nav {
    background: red;
  }
</style>
