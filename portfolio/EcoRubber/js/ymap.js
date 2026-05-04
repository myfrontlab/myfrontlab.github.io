// Яндекс карта
ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center:[59.93969696339413,30.430417686508132],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });

    myMap.controls.remove('searchControl');
    myMap.behaviors.disable('scrollZoom');


    placemark = new ymaps.Placemark([59.93969696339413,30.430417686508132], {

        }
        , {
            iconLayout: 'default#image',
            iconImageHref: 'img/design/icons/map-marker.svg',
            iconImageSize: [56, 71],
            iconImageOffset: [-3, -42],
            hideIconOnBalloonOpen: false
        });
    myMap.geoObjects.add(placemark);
}

