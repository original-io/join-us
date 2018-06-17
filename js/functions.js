 // Selecao de produtos - Slider Lateral / Foto grande.
    
    let produtoSlider = document.getElementById('produtoSlider').getElementsByTagName('img');
    let produtoSliderGrande = document.getElementById('produtoSliderGrande');
    

    for (let i = 0; i < produtoSlider.length; i++){
        produtoSlider[i].addEventListener('click', full_image);
    }

    function full_image() {
        let imgSrc = this.getAttribute('src');        
        produtoSliderGrande.innerHTML = "<img src="+imgSrc+">";
    }

// Selecionar cores -  
    
   $(function(){
       $('.cores').click(function(){
           $('.cores').removeClass('ativo')
           $(this).addClass('ativo')
       })
   })

// Selecionar tamanho

   $(function(){
    $('.tamanho').click(function(){
        $('.tamanho').removeClass('tamanhoativo')
        $(this).addClass('tamanhoativo')
    })
})

// Menu mobile
    $('.mobile--menuhamb').click(function(){
        $('header nav.mobile ul').slideToggle();
    })

// modal

let alturaTela = $(document).height()
let larguraTela = $(document).width()

$('#adicionarSacola').click(function(){
    $('#mascaraModal').css({'width':larguraTela,'height':alturaTela})
    $('#mascaraModal').fadeIn(1000)
    $('#mascaraModal').fadeTo("slow",0.8)
    $('.modal--sucesso').fadeIn(1000)
})

$('#modalFechar').click(function(){
    $('#mascaraModal').hide()
    $('.modal--sucesso').hide()
})

// SACOLA SUCESSO

$('#sacolaSucesso').click(function(){
    $('.sacola--sucesso').fadeIn(500);
})
$('.sacola--sucesso__fechar').click(function(){
    $('.sacola--sucesso').hide();
})

// menu desktop

$('#sapatos').click(function(){
    $('.toggleSapatos').slideToggle(700);
    $('.toggleBolsas').hide();
    $('.toggleAcessorios').hide();
})

$('#bolsas').click(function(){
    $('.toggleBolsas').slideToggle(700);
    $('.toggleSapatos').hide();
    $('.toggleAcessorios').hide();
})

$('#acessorios').click(function(){
    $('.toggleAcessorios').slideToggle(700);
    $('.toggleSapatos').hide();
    $('.toggleBolsas').hide();
})



