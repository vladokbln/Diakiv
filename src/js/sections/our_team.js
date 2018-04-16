$('.our_team__slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    dotsClass: 'our_team__dots',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});