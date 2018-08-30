function init() {
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );
    var markerOptions = {
        iconLayout: 'default#imageWithContent',
        iconImageHref: mapConfig.maps[0].icon,
        iconImageSize: [28, 45],
        hideIconOnBalloonOpen: false,
        iconContentLayout: MyIconContentLayout,
        balloonOffset: [15, 0],
        openBalloon: true,
        iconShape: {
            type: 'Rectangle',
            coordinates: [
                [-25, -25],
                [25, 25]
            ]
        }
    };
    console.log(mapConfig)
    // var ballonContentHtml = $('.ballon');
    var myMap = new ymaps.Map(mapConfig.maps[0].id, {
            center: mapConfig.maps[0].mapCenter,
            zoom: mapConfig.maps[0].zoom
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemarkWithContent = new ymaps.Placemark(mapConfig.maps[0].mapCenter, {
            balloonContent: mapConfig.maps[0].balloonContentBody
        }, markerOptions);
    var myPolyline = new ymaps.Polyline([
        // Указываем координаты вершин ломаной.
        [55.779427, 37.666233],
        [55.778375, 37.667843],
        [55.777271, 37.669280],
        [55.775989, 37.670900],
        [55.776679, 37.672542],
        [55.777350, 37.673958],
        [55.775572, 37.677583],
        [55.775481, 37.677701],
        [55.775283, 37.677789],
        [55.772317, 37.678611],
        // [55.577832, 37.589429],
        // [55.577978, 37.589515],
        // [55.70, 37.50],
        // [55.70, 37.40]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        balloonContent: "Ломаная линия"
    }, {
        // Задаем опции геообъекта.
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
        // Цвет линии.
        strokeColor: "#ee4e4d",
        // Ширина линии.
        strokeWidth: 5,
        // Коэффициент прозрачности.
        strokeOpacity: 0.8
    });
    // myPlacemarkWithContent.balloon.open();
    myMap.geoObjects.add(myPlacemarkWithContent);
    myMap.geoObjects.add(myPolyline);

}

jQuery(window).on("load", function () {
    // if (typeof mapConfig != "undefined") {
        ymaps.ready(init);

    // }

});