const shoesbtn = document.getElementById("shoes-section-btn");
const shoessection = document.getElementById("shoes-section");
const bagsbtn = document.getElementById("bags-section-btn");
const bagssection = document.getElementById("bags-section");
const accessoriesbtn = document.getElementById("accessories-section-btn");
const accessoriessection = document.getElementById("accessories-section");

const shoppingcartsection = document.getElementById("shopping-cart-section");
const shoppingcartbtn = document.getElementById("shopping-cart-btn");
const shoppingcart = document.getElementById("shopping-cart");
const closecartbtn = document.getElementById("close-cart-btn");

const addtocartbtn = document.getElementById("cart-add-btn");
const addtocartmodal = document.getElementById("cart-modal");
const closemodalbtn = document.getElementById("close-modal-btn");
const finishbtn = document.getElementById("finish-btn");
const continuebtn = document.getElementById("continue-btn");

/* Exibir os menus das seções quando o mouse estiver em cima */

accessoriesbtn.onmouseenter = () => {
    accessoriessection.style.height = "440px";
};

accessoriesbtn.onmouseleave = () => {
    accessoriessection.style.height = "0";
};

accessoriessection.onmouseleave = () => {
    accessoriessection.style.height = "0";
};

accessoriessection.onmouseover = () => {
    accessoriessection.style.height = "440px";
};

bagsbtn.onmouseenter = () => {
    bagssection.style.height = "440px";
};

bagsbtn.onmouseleave = () => {
    bagssection.style.height = "0";
};

bagssection.onmouseleave = () => {
    bagssection.style.height = "0";
};

bagssection.onmouseover = () => {
    bagssection.style.height = "440px";
};

shoesbtn.onmouseenter = () => {
    shoessection.style.height = "440px";
};

shoesbtn.onmouseleave = () => {
    shoessection.style.height = "0";
};

shoessection.onmouseleave = () => {
    shoessection.style.height = "0";
};

shoessection.onmouseover = () => {
    shoessection.style.height = "440px";
};

/* Ver o carrinho de compras */

shoppingcartbtn.onclick = () => {
    shoppingcart.style.display = "flex";
};

closecartbtn.onclick = () => {
    shoppingcart.style.display = "none";
};

shoppingcartbtn.onmouseover = () => {
    shoppingcartsection.style.display = "block";
};

shoppingcartsection.onmouseleave = () => {
    shoppingcartsection.style.display = "none";
};

/* Modal do carrinho de compras */

addtocartbtn.onclick = () => {
    addtocartmodal.style.display = "flex";
};

closemodalbtn.onclick = () => {
    addtocartmodal.style.display = "none";
};

finishbtn.onclick = () => {
    addtocartmodal.style.display = "none";
    shoppingcart.style.display = "flex";
};

continuebtn.onclick = () => {
    addtocartmodal.style.display = "none";
};
