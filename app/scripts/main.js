$(document).ready(function(){

	'use strict';

	$('.btn-init').on('click',function(){
		$('#main-container').slideToggle(function(){
			$('html, body').animate({
		        scrollTop: $('#main-container').offset().top
		    }, 500);
		});
	});

});