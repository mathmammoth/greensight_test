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

function isMessage() {
        let name = document.getElementById("name").value;
        let re = /^[А-Яа-яЁё\s-]+$/i;
        if (re.test(name)) status.innerHTML = true;
        else document.querySelector("#alert").style.display = "block";
}


ymaps.ready()
    .done(function (ym) {
        let myMap = new ym.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        })
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