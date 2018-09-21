jQuery(document).ready(function(){
                jQuery('html').click( function(){
                    var buscar = $("#buscar input").val();
                    var nome = $(".nome").val();
                    var email = $(".email").val();
                    if (buscar === ""){
                        $('#buscar input').css({width: 60});
                    };
                        if (nome === ""){
                        $('#label-nome').fadeOut(500);
                    };
                        if (email === ""){
                        $('#label-email').fadeOut(500);
                    };
                return false;
                });
                jQuery('#buscar').click( function(){
                        $('#buscar input').css({width: 150});
                        $('#buscar input').focus();
                return false;
                });
                
		jQuery('.menu-sapatos').click( function(){
                        $('#bolsas, #acessorios').hide();
                           $('#sapatos').toggle(2000); 
                return false;
                });
		
		jQuery('.menu-bolsas').click( function(){
                        $('#sapatos, #acessorios').hide();
                           $('#bolsas').toggle(2000); 
                return false;
                });
                
		jQuery('.menu-acessorios').click( function(){
                        $('#bolsas, #sapatos').hide();
                           $('#acessorios').toggle(2000); 
                return false;
                });
                
                $(".mini-img").click(function() {
	  	$(".mini-img").each(function( index ) {
		  if ($(this).hasClass("mini-img-selected")){
		  	$(this).removeClass("mini-img-selected");
		  }
		});
                $(this).addClass("mini-img-selected");
		});
                $(".side-bar-right ul li").click(function() {
	  	$(".side-bar-right ul li").each(function( index ) {
		  if ($(this).hasClass("selected")){
		  	$(this).removeClass("selected");
		  }
		});
		$(this).addClass("selected");
		var tamanho = $(this).text();
		$(".number-size").text(tamanho);
	});
                $(".side-bar-right i").click(function() {
	  	$(".side-bar-right i").each(function( index ) {
		  if ($(this).hasClass("selected-color")){
		  	$(this).removeClass("selected-color");
		  }
		});
		$(this).addClass("selected-color");
		var tamanho = $(this).attr('id');
		$(".color-product").text(tamanho);
	});
                
                jQuery('.add').click(function () {
                    $('#myModal').fadeIn(1000);
                    $('.background').fadeIn(1000);
                    return false;
                });
                jQuery('#fechar').click(function () {
                    $('#myModal').fadeOut(1000);
                    $('.background').fadeOut(1000);
                    return false;
                });
                
                jQuery('.pd1 + .quickview').click(function () {
                    $('#Modal-bolsa').fadeIn(1000);
                    $('.background').fadeIn(1000);
                    return false;
                });
                jQuery('#fechar-bolsa').click(function () {
                    $('#Modal-bolsa').fadeOut(1000);
                    $('.background').fadeOut(1000);
                    return false;
                });
                jQuery('.pd2 + .quickview').click(function () {
                    $('#Modal-chinelo').fadeIn(1000);
                    $('.background').fadeIn(1000);
                    return false;
                });
                jQuery('#fechar-chinelo').click(function () {
                    $('#Modal-chinelo').fadeOut(1000);
                    $('.background').fadeOut(1000);
                    return false;
                });
                jQuery('.pd3 + .quickview').click(function () {
                    $('#Modal-sandalias').fadeIn(1000);
                    $('.background').fadeIn(1000);
                    return false;
                });
                jQuery('#fechar-sandalias').click(function () {
                    $('#Modal-sandalias').fadeOut(1000);
                    $('.background').fadeOut(1000);
                    return false;
                });
                jQuery('.pd4 + .quickview').click(function () {
                    $('#Modal-bolsinha').fadeIn(1000);
                    $('.background').fadeIn(1000);
                    return false;
                });
                jQuery('#fechar-bolsinha').click(function () {
                    $('#Modal-bolsinha').fadeOut(1000);
                    $('.background').fadeOut(1000);
                    return false;
                });
                
                jQuery('.nome').keyup(function () {
                    $('#label-nome').fadeIn(500);
                    return false;
                });
                jQuery('.email').keyup(function () {
                    $('#label-email').fadeIn(500);
                    return false;
                });
                
                $(".section-2 .pd1").mouseenter(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/par-sandalias.jpg');
                   });
                   $(".section-2 .pd1").mouseleave(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/bolsa.png');
                });
                $(".section-2 .pd2").mouseenter(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/par-sandalias.jpg');
                   });
                   $(".section-2 .pd2").mouseleave(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/chinelo.png');
                });
                $(".section-2 .pd3").mouseenter(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/par-sandalias.jpg');
                   });
                   $(".section-2 .pd3").mouseleave(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/sandalias.png');
                });
                $(".section-2 .pd4").mouseenter(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/par-sandalias.jpg');
                   });
                   $(".section-2 .pd4").mouseleave(function() {
                    var logo = $(this);
                   logo.attr('src', 'img/bolsinha.png');
                });
                
                jQuery('.menu-mobile').click(function () {
                    $('.mobile-ul').toggle();
                    return false;
                }); 
            });
                
        
                
        var num = 1;
        var mais = document.getElementById("mais");
        mais.onclick = function (){
            if (num < 10){
            num++;
            document.getElementById("num-page").innerHTML = num;
        }
        };
        var menos = document.getElementById("menos");
        menos.onclick = function (){
            if (num > 1){
                num--;
            document.getElementById("num-page").innerHTML = num;
        }
        };
        
        