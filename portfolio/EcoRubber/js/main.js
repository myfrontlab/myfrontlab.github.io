const swiper = new Swiper('.platform-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3
        },
    }
});

const swiper2 = new Swiper('.portfolio-slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

$(document).ready(function() {
    $('.header-catalog-btn').on('click', function (){
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        $('.h-catalog').toggleClass('active');
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('menu-open');

        if ($('.h-catalog').hasClass('active')){
            $('body').css('padding-right', scrollbarWidth + 'px');
            $('.header').css('width', window.innerWidth - scrollbarWidth + 'px');
        } else {
            $('body').css('padding-right', '0px');
            $('.header').css('width', '100%');
        }
    })
});

jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $('.h-catalog, .header-catalog-btn, .fancybox-container'); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.h-catalog').removeClass('active');
            $('.header-catalog-btn').removeClass('active');
            $('.overlay').removeClass('active');
            $('body').removeClass('menu-open');
            var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            $('body').css('padding-right', '0px');
            $('.header').css('width', '100%');
        }
    });
});

var winW = $(window).width();
$(window).on('resize', function (){
    var winW = $(window).width();
    $('.header').css('width', '100%');
})

$('[data-fancybox]').fancybox({
    hideScrollbar: true,
    animated: false,
    beforeShow : function( instance, current ) {
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        $('.header').css('width', winW - scrollbarWidth + 'px');
    },
    afterClose  : function() {
        $('.header').css('width', '100%');
    }
});

$(document).ready(function() {
   $('.tabs').each(function (){
       var item = $(this);
       $('.tabs-header-item', item).on('click', function (){
          var index = $(this).index();
           $('.tabs-content-item', item).removeClass('active').eq(index).addClass('active');
           $('.tabs-header-item', item).removeClass('active').eq(index).addClass('active');
       });
   })
});

$(document).ready(function() {
    $('.portfolio').each(function (){
        var item = $(this);
        $('.portfolio-tabs-item', item).on('click', function (){
            var index = $(this).index();
            $('.portfolio-content-item', item).removeClass('active').eq(index).addClass('active');
            $('.portfolio-tabs-item', item).removeClass('active').eq(index).addClass('active');
        });
    })
});


$(document).ready(function() {
    $('.order').each(function (){
        var item = $(this);
        $('.order-content-action-counter-minus', item).on('click', function (){
           var value = Number($('.order-content-action-counter-input', item).val());
           if(value > 1){
               $('.order-content-action-counter-input', item).val(value-1);
           }
        });
        $('.order-content-action-counter-plus', item).on('click', function (){
            var value = Number($('.order-content-action-counter-input', item).val());
            $('.order-content-action-counter-input', item).val(value+1);
        });
    })
});
