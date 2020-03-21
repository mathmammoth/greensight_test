import $ from "jquery";
import "jquery.maskedinput/src/jquery.maskedinput";
import ymaps from 'ymaps';



$(document).ready(function () {
    $(".tab__elem").click(function () {
        let indexTab = $(this).attr("data-tab");
        $(".dws-form").find(".tab__elem-active").removeClass("tab__elem-active");
        $(this).addClass("tab__elem-active");
        $("#tab__container").find(".active").removeClass("active");
        $("#tab-" + indexTab).addClass("active");
    });


    $("#phone").mask("+7 (999) 999-99-99");



});

$(function() {
    $(function($) {
        $('#name').on('keypress', function() {
            let that = this;
            setTimeout(function() {
                let res = /[^а-яА-ЯёЁ ]/g.exec(that.value);
                that.value = that.value.replace(res, '');
            }, 0);
        });
    });
});




ymaps
    .load()
    .then(maps => {
        const map = new maps.Map('map', {
            center: [-8.369326, 115.166023],
            zoom: 7
        });
    });

/*
ymaps.ready(initMap);

function initMap() {
    let map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl']
        });
    let placemark = new ymaps.Placemark([59.97, 30.31], {

    });

    map.geoObjects.add(placemark);

} */

/* $(function () {
    var myGeoObjects = [],
        coords = [
            [56.023, 36.988],
            [56.025, 36.981],
            [56.020, 36.981],
            [56.021, 36.983],
            [56.027, 36.987]
        ],
        myMap,
        myClusterer;

    ymaps.ready(function () {
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 7
        });
        myClusterer = new ymaps.Clusterer();

        for (var i = 0; i < coords.length; i++) {
            myGeoObjects[i] = new ymaps.Placemark(
                coords[i]
            );
        }

        myClusterer.add(myGeoObjects);
        myMap.geoObjects.add(myClusterer);
    });
}); */