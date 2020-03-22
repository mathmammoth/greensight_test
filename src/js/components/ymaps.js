import ymaps from "ymaps";

ymaps
    .load()
    .then(maps => {

        const placemarks = [
            {
                latitude: 55.801131568944264,
                longitude: 37.508166499999994,
                hintContent: 'Пункт выдачи заказов Песчаная ул., д. 13',
                balloonContent: 'Пункт выдачи заказов Песчаная ул., д. 13. Время работы: пн-пт - 9:00-21:00, сб-вс - 10:00-18:00'
            },
            {
                latitude: 55.7575560689813,
                longitude: 37.65159149999997,
                hintContent: 'Пункт выдачи заказов Подсосенский пер., д. 11',
                balloonContent: 'Пункт выдачи заказов Подсосенский пер., д. 11. Время работы: пн-пт - 10:00-22:00, сб-вс - 9:00-18:00'
            }
        ];


        const map = new maps.Map('map', {
            center: [55.75597083685968,37.62680234504698],
            zoom: 11,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        placemarks.forEach(function(obj) {
            let placemark = new maps.Placemark([obj.latitude,obj.longitude], {
                    hintContent: obj.hintContent,
                    balloonContent: obj.balloonContent
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'src/img/pin.png'
                });

            map.geoObjects.add(placemark);
            map.setBounds(map.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){
                if(map.getZoom() < 1) map.setZoom(11);
            });
        });
    });