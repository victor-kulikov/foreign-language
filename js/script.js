jQuery(document).ready(function($){

	// PopUp pop-up window
	$('.hide_quest_form, .form_bg, .hide_main_pop_form').on('click',function(){
		$('.form_bg, .main_pop_form ').hide();
		$('body').css('overflow','auto');
	})


	$('body').on('click','.search',function(){
		$('.form_bg, .main_pop_form').show();
		$('body').css('overflow','hidden');
	})	


	window.onkeydown = function( event ) {
		if ( event.keyCode == 27 ) {
			$('.form_bg, .main_pop_form ').hide();
			$('body').css('overflow','auto');
		}
	};


// Sticky
 window.onscroll = function() {myFunction()};
var header = document.getElementById("sticky");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickytop");
  } else {
    header.classList.remove("stickytop");
  }
}	

// Burger
$(".show-m-but").on('click',function(){
	$(".m-bm-hidden").slideToggle();
})

$('.navy-mob__item').each(function(){
	if($(this).hasClass('menu-item-has-children')){
		$(this).append('<span class="f-b-go-t"><i class="fa fa-caret-right" aria-hidden="true"></i></span>');
	}
});
$(".m-bm-hidden").on('click','.f-b-go-t',function(){
	$(this).parent('li').toggleClass('active-m');
	console.log(1);
});


// Slidertop
$('.slidertop').slick({
	dots: true,
	prevArrow: '<button type = "button" class = "slick-arrow slidertop-prev"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
	nextArrow: '<button type = "button" class = "slick-arrow slidertop-next"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   adaptiveHeight: true,
   responsive: [{
         breakpoint: 1025,
         settings: {
            dots: false,
            arrows : false
         }
     }, ]
    });


// Slider-text
$('.slider-text').slick({
	dots: false,
	prevArrow: '<button type = "button" class = "slick-arrow slider-text-prev"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
	nextArrow: '<button type = "button" class = "slick-arrow slider-text-next"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
	autoplay: false,
	speed: 3000,
	responsive: [{
            breakpoint: 1025,
            settings: {
                arrows : false
            }
        }, ]
});


// Сhange the background of the link
  $('#nav').on('click', 'a', function(){
    if ($("#nav a").hasClass("link-block__link--active")) {
      $('#nav a').removeClass('link-block__link--active');
    }
    $(this).addClass('link-block__link--active');
  });



$('.slider1').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			speed: 2000,
			prevArrow: '<button type = "button" class = "slick-arrow teachers-prev"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			nextArrow: '<button type = "button" class = "slick-arrow teachers-next"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			customPaging : function(slider1, i) {
				var thumb = $(slider1.$slides[i]).data();
				return '<a>'+(i+1)+'</a>';
			},
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 1,
					 dots: false,
            	 arrows: false
				}
			}
			]       
		});


		$('.slider2').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,	
			speed: 2000,
			prevArrow: '<button type = "button" class = "slick-arrow teachers-prev"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			nextArrow: '<button type = "button" class = "slick-arrow teachers-next"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			customPaging : function(slider2, i) {
				var thumb = $(slider2.$slides[i]).data();
				return '<a>'+(i+1)+'</a>';
			},
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 1,
					 dots: false,
            	 arrows: false
				}
			}
			]       
		});

		$('.slider3').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,	
			speed: 2000,
			prevArrow: '<button type = "button" class = "slick-arrow teachers-prev"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			nextArrow: '<button type = "button" class = "slick-arrow teachers-next"><i class="fa fa-sort-desc" aria-hidden="true"></i></ button>',
			customPaging : function(slider3, i) {
				var thumb = $(slider3.$slides[i]).data();
				return '<a>'+(i+1)+'</a>';
			},
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					 dots: false,
            	 arrows: false
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 1,
					 dots: false,
            	 arrows: false
				}
			}
			]       
		});

		
$('.slider1').on('setPosition', function () {		      
    $(this).find('.slick-slide').height('auto');		      
    var slickTrack = $(this).find('.slick-track');		      
    var slickTrackHeight = $(slickTrack).height();		      
    $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
  });

  	$('.slider2').on('setPosition', function () {		      
    $(this).find('.slick-slide').height('auto');		      
    var slickTrack = $(this).find('.slick-track');		      
    var slickTrackHeight = $(slickTrack).height();		      
    $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
  });	

  	$('.slider3').on('setPosition', function () {		      
    $(this).find('.slick-slide').height('auto');		      
    var slickTrack = $(this).find('.slick-track');		      
    var slickTrackHeight = $(slickTrack).height();		      
    $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
  });		


});


