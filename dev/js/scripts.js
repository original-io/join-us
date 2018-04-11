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