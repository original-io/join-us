let products = {
    skus:[],
};
const Methods = {
    init() {
        Methods.update_cart();
        Methods.set_selectors();
        Methods.slick_main();
        Methods.slick_nav();
        Methods.slick_shelf();
        Methods.cart_settings();
        Methods.news();
    },

    update_cart (sku){
        if(sku != undefined){
            products['skus'].push(sku);
        }
        let qtd = products.skus.length;
        $('#cart-qtd').text(qtd);
    },
    set_selectors (){
        $('.js--product-color-container span, .shelf__colors span').each( function() {
            let color = $(this).attr('data-color');
            $(this).css('background','#' + color);
        });
        $('.js--product-color-container span').click( function() {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            let cor = $(this).text();
            $('#color__selected').html("(" + cor + ")")
        });
        $('.js--product-size-container span').click( function() {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            let size = $(this).text();
            $('#size__selected').html("(" + size + ")")
        })
    },
    slick_main (){       
        $('.js--product-img-main').slick({
            infinite: false,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            slidesToScroll: 1,
            asNavFor: '.js--product-img-nav'
        });     
    },   
    slick_nav (){   
        $('.js--product-img-nav').slick({
            infinite: false,
            slidesToShow: 4,
            arrows: true,
            vertical: true,
            slidesToScroll: 1,
            focusOnSelect: true,
            lazyLoad: 'ondemand',
            asNavFor: '.js--product-img-main'
        });         
    }, 
    slick_shelf (){  
        $('.js--product-main-shelf').on('init', (event, slick) => {
            let last_dot = $('.js--product-main-shelf').find(".slick-dots li:last-of-type");
            let new_dot = last_dot.clone();
            $('.js--product-main-shelf .slick-dots').append("<span>de</span>",new_dot);
        });
        $('.js--product-main-shelf').slick({
            infinite: false,
            slidesToShow: 4,
            arrows: true,
            dots: true,
            slidesToScroll: 1,
            lazyLoad: 'ondemand'
        }); 
    }, 
    cart_settings (){
        $(".js--add-to-cart").on('click', (ev) => {
            if($('.product__select-color span.selected').length == 0){
                alert('Selecione uma cor.')
            }else if($('.product__select-size span.selected').length == 0){
                alert('Selecione o tamanho.')
            }else{
                let sku = $('.product__select-size span.selected').attr('data-sku');
                $(".product__cart").show();
                Methods.update_cart(sku);
            }
        });
        $(".cart__close, .cart__keep").on('click', (ev) => {
            $(".product__cart").hide();
        })
    },
    news (){
        $('#newsletter').on('submit', (ev) => {
            ev.preventDefault();
            alert("Cadastrado com sucesso!");
        })
    }
};

document.addEventListener('DOMContentLoaded', Methods.init);