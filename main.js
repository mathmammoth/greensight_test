
import $ from "jquery";
import "jquery.maskedinput/src/jquery.maskedinput";



$(document).ready(function () {
    $(".tab__elem").click(function () {
        let indexTab = $(this).attr("data-tab");
        $(".dws-form").find(".tab__elem-active").removeClass("tab__elem-active");
        $(this).addClass("tab__elem-active");
        $("#tab__container").find(".active").removeClass("active");
        $("#tab-" + indexTab).addClass("active");
    });


    $("#phone").mask("+7 (999) 999-99-99");

    initMap();


});

function initMap() {
    let element = document.getElementById('map');
    let icon = ('src/img/placeholder.png');
    let options = {
        zoom: 15,
        center: {lat: 55.9791177, lng: 37.1833553},
    };

    let map = new google.maps.Map(element, options);

    let markers = [
        {
            coordinates: {lat: 55.9791177, lng: 37.1833553},
            image: icon
        },

        {
            coordinates: {lat: 55.9811233, lng: 37.1829328},
            image: icon
        }
    ];

    for(let i=0; i < markers.length; i++)
    {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        let marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map,
            icon: properties.image,
        });
    }

    $(".radio").click(function () {

        console.log(1);
        $(element).find(markers).remove(icon);
        console.log(2)
        $(this).add(icon);
        console.log(3)
    });
}




