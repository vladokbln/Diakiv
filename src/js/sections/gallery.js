window.onload = function() {
   $('.gallery__item-top').masonry ({
    itemSelector: '.gallery__img',
    columnWidth: '.gallery__img',
    percentPosition: true,
    originTop: false,
    });   
    $('.gallery__item').masonry ({
        itemSelector: '.gallery__img',
        columnWidth: '.gallery__img',
        percentPosition: true,
    });

    // GALLERY POPUP
    $('.gallery__img').magnificPopup({
        type:'image',
        gallery: {
            enabled: true,
            tCounter: '', // убираем счетчик
            arrowMarkup: '<button title="%title%" type="button" class="glr-mfp-arrow glr-mfp-arrow-%dir%"></button>' // ренейн класс стрелок
        },
        image: {
            cursor: null,
            markup: '<div class="mfp-figure">'+
                        '<div class="mfp-title"></div>'+
                        '<div class="mfp-img"></div>'+  
                    '</div>'
        },
        showCloseBtn: false,
        removalDelay: 300,
        mainClass: 'js-gallery' // Название класса галлере
    }); 
}

