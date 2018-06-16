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