<template>
	<div id="topo">
		<div class="container">
			Estou no topo usando variavel -> <span>{{ msg }}</span>
			<minha-navegacao></minha-navegacao>
		</div>
	</div>
</template>

<script>
import minhaNavegacao from './navegacao.vue';

export default {
	name: 'meu-header',
	data (){
		return {
			msg: 'VARIAVEL = PORRA'
		}
	},
	components: {
		minhaNavegacao
	}
}
	
</script>

<style lang="scss">
	#topo {
		border: 1px solid red;
		> span {
			color: yellow;
		}
	}
</style>