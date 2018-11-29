$(document).ready(function(){
	
	$('.fadeIn').fadeOut(1500);
	
	  $('.home-slider').slick({
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: '3000',
	  fade: true,
	  
	  });
	  
	AOS.init({
		offset: 100,
		duration: 600,
		easing: 'ease',
	});
	window.addEventListener('load', function() {
		AOS.refresh();
	});
	  
	  
	  $('.hamburgerMenu').on('click', function(){ 
		  
		   $(this).toggleClass('open');
		   
		  if($(this).hasClass('open')) {
		  
			  $('.sideMenu').addClass('sideMenuSlide');
			  $('header').addClass('sideMenuSlide');
			  $('header h1').animate({opacity:0},100);
			   $('.sideMenu h1').delay(300).animate({opacity:1},500);
			    $('.sideMenu ul').delay(300).animate({opacity:1},500);
			    $('.contact-info').delay(300).animate({opacity:1},500);
			  $('.maincontent').addClass('sideMenuSlide');
		  
		  } else {
		  		$('.sideMenu h1').animate({opacity:0},500);
		  		 $('.sideMenu ul').animate({opacity:0},500);
		  		 $('.contact-info').animate({opacity:0},500);
			  $('.sideMenu').removeClass('sideMenuSlide');
			  $('header').removeClass('sideMenuSlide');
			  $('header h1').animate({opacity:1},500);
			  $('.maincontent').removeClass('sideMenuSlide');
		  
		  }
	  });
  
  
  
});
	