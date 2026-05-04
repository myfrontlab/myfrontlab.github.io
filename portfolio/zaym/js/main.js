// Вопрос - ответ
$(document).ready(function() {
    $('.faq-item').each(function () {
        var item = $(this);
        $('.faq-item__answer', item).animate({height: "hide"}, 0);
        $('.faq-item__question', item).on('click', function () {
            if(item.hasClass('active')){
                item.removeClass('active');
                $('.faq-item__answer', item).animate({height: "hide"}, 200);
            } else {
                item.addClass('active');
                $('.faq-item__answer', item).animate({height: "show"}, 200);
            }
        });
    });
});

// Открытие мобильного меню
$( document ).ready(function() {
    $('.header__burger button').on('click', function () {
        $('.header__nav').addClass('active');
    });
    $('.header__nav-close').on('click', function () {
        $('.header__nav').removeClass('active');
    })
});

// Раскрытие пунктов подменю на мобильных
var windowWidth = $(window).width();
$(window).on('resize', function () {
    windowWidth = $(window).width();
});

if(windowWidth < 1200){
    $('.header__nav>ul>li').each(function () {
        var item = $(this);
        item.on('click', function () {
            // alert('adsd')
            $(this).toggleClass('active');
        })
    });
}


// Калькулятор
$(document).ready(function () {

    var input1 = $("#input-1");
    var input2 = $("#input-2");

    input1.ionRangeSlider({
        min: 10000,
        max: 90000,
        from: 50000,
        step: 1000,
        skin: "round",
    });
    input2.ionRangeSlider({
        min: 10,
        max: 180,
        from: 24,
        step: 1,
        skin: "round"
    });

    input1.on("change", function () {
        var $inp = $(this);
        var from = $inp.prop("value").toLocaleString('ru');
        format = String(from).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        $('#input-manual-1').val(format);
    });
    input2.on("change", function () {
        var $inps = $(this);
        var froms = $inps.prop("value");
        var ends = declOfNum(froms, ['день', 'дня', 'дней']);
        $('#input-manual-2').val("На "+ froms+" "+ ends);
    });

    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

});

// Селекты
$( document ).ready(function() {
    $('select').selectric();
    $('.reviews-filter-item-rating select').on('change', function() {
        var item = $(this).val();
        if(item == '1'){
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--2');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--3');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--4');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--5');
            $('.reviews-filter-item-rating .selectric .label').addClass('selectric--1');
        }
        if(item == '2'){
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--1');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--3');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--4');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--5');
            $('.reviews-filter-item-rating .selectric .label').addClass('selectric--2');
        }
        if(item == '3'){
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--1');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--2');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--4');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--5');
            $('.reviews-filter-item-rating .selectric .label').addClass('selectric--3');
        }
        if(item == '4'){
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--1');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--2');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--3');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--5');
            $('.reviews-filter-item-rating .selectric .label').addClass('selectric--4');
        }
        if(item == '5'){
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--1');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--2');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--3');
            $('.reviews-filter-item-rating .selectric .label').removeClass('selectric--4');
            $('.reviews-filter-item-rating .selectric .label').addClass('selectric--5');
        }
    });
});

// Чекбоксы
$( document ).ready(function() {
    $("input[type='radio'], input[type='checkbox']").ionCheckRadio();
});

// Рейтинг
$( document ).ready(function() {
    $('.rating-action-item').on('click', function () {
        var rating = $(this).data('rating');
        $('.input-rating-action').val(rating);
        $('.rating-action-item').each(function (i) {
            $(this).removeClass('active');
            var ratingDefault = $(this).data('rating');
            if(ratingDefault <= rating){
                $(this).addClass('active');
            }
        });
    });
});

// Имя файла в форме
$('.form-file input').on('change', function () {
    if (this.files[0]){
        $('.form-file span')[0].innerHTML = this.files[0].name;
    }
});
