// Carrossel vertical
function changeImage(a) {
    document.getElementById("img").src = a;
}

// Modal
$(document).ready(function () {
    $('.modal').modal();
});

// Número de itens na sacola
var compras = 0;
function nCompras() {
    compras += 1;
    document.getElementById("nProdutos").innerHTML = compras;
    document.getElementById("nProdutos").style.display = "block";
}