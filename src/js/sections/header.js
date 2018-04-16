// BURGER
$( function() {
	$( ".burger" ).on( "click", function() {
	    $( ".header" ).toggleClass( "open", 1000);
	});
});
// HEADER SLIDER
$('.header__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

});
