jQuery(document).ready(function($) {
	var mobileMenu = $('#main_menu').html();
	console.log(mobileMenu);
	$('header.header1').append('<div class="wrap-side-menu"><nav class="side-menu">'+ mobileMenu +'</div></div>');
	
	$('.side-menu > ul').removeClass('main_menu').addClass('main-menu');
	$('.side-menu ul.sub_menu').removeClass('sub_menu').addClass('sub-menu').before('<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>');

	// Search In Mobile Menu
	var searchMenu = $('.topbar-child1').html();
	$('.side-menu > ul').append('<li></li>')


	// Class add to menu
	$('.side-menu > ul > li').addClass('item-menu-mobile');
});