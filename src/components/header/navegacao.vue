<template>
  <nav class="navbar">
        <a href="#">
            <img src="" title="" alt="">
        </a>
        <button type="button" data-toggle="collapse" data-target="#menuItens"><span></span></button>                    
        <div class="collapse" id="menuItens">
            <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
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
