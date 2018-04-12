function changeImageCarouselVertical(a) {
    document.getElementById("img-vertical").src = a;
}

$(document).ready(function () {
    $('.modal').modal();
});

var compras = 0;
function nCompras() {
    compras += 1;
    document.getElementById("nProdutos").innerHTML = compras;
    document.getElementById("nProdutos").style.display = "block";
}

function sliderVerticalVoltar() {
    document.getElementsByClassName("produto__slider-vertical--interior")[0].style.top = "0";
    document.getElementsByClassName("produto__slider-vertical--interior")[0].style.transition = "all .6s ease-in-out";
}

function sliderVerticalAvancar() {
    document.getElementsByClassName("produto__slider-vertical--interior")[0].style.top = "-25.5pc";
    document.getElementsByClassName("produto__slider-vertical--interior")[0].style.transition = "all .6s ease-in-out";
}

$(document).ready(function () {
    $('.carousel').carousel({
        dist: 0,
        fullWidth: true
    });

    $('.next').click(function () {
        $('.carousel').carousel('next');
    });

    $('.prev').click(function () {
        $('.carousel').carousel('prev');
    })
});