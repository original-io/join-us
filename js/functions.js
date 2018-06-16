    let produtoSlider = document.getElementById('produtoSlider').getElementsByTagName('img');
    let produtoSliderGrande = document.getElementById('produtoSliderGrande');
    

    for (let i = 0; i < produtoSlider.length; i++){
        produtoSlider[i].addEventListener('click', full_image);
    }

    function full_image() {
        let imgSrc = this.getAttribute('src');        
        produtoSliderGrande.innerHTML = "<img src="+imgSrc+">";
    }
