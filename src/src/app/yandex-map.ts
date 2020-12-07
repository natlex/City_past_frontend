import { Component, OnInit } from '@angular/core';

declare let ymaps: any;

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.html',

  })
export class YandexmapComponent implements OnInit {
  public map: any;

  ngOnInit() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map("first_map", {
        center: [61.78, 34.35],
        zoom: 13,
        controls: ['zoomControl', 'searchControl', 'typeSelector', 'geolocationControl']
      }, {
        searchControlProvider: 'yandex#search',
      });

      let myPlacemark: any;

      // Слушаем клик на карте.
      this.map.events.add('click', (e: any) => {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
          myPlacemark = createPlacemark(coords);
          this.map.geoObjects.add(myPlacemark);
          // Слушаем событие окончания перетаскивания на метке.
          myPlacemark.events.add('dragend', function () {
              getAddress(myPlacemark.geometry.getCoordinates());
          });
        }
        getAddress(coords);
      });

      // Создание метки.
      function createPlacemark(coords: any) {
        return new ymaps.Placemark(coords, {
          iconCaption: 'поиск...'
        }, {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true
        });
      }

      // Определяем адрес по координатам (обратное геокодирование).
      function getAddress(coords: any) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res: any) {
          var firstGeoObject = res.geoObjects.get(0);

          myPlacemark.properties
              .set({
                  // Формируем строку с данными об объекте.
                  iconCaption: [
                      // Название населенного пункта или вышестоящее административно-территориальное образование.
                      firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                      // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                  ].filter(Boolean).join(', '),
                  // В качестве контента балуна задаем строку с адресом объекта.
                  balloonContent: firstGeoObject.getAddressLine()
              });
        });
      }
    });
  }
}
