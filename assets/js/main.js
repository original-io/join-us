var modal = document.querySelector(".shoppingcart");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".shoppingcart-content--close");

function toggleModal() {
    modal.classList.toggle("shoppingcart-show");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);