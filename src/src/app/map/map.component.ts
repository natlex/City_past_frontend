import { Component, OnInit } from '@angular/core';

declare let ymaps: any;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',

  })
export class mapComponent implements OnInit {
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

        this.map.events.add('click', (e: any) => {
        var coords = e.get('coords');

        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        }

        else {
          myPlacemark = createPlacemark(coords);
          this.map.geoObjects.add(myPlacemark);

          myPlacemark.events.add('dragend', function () {
              getAddress(myPlacemark.geometry.getCoordinates());
          });
        }
        getAddress(coords);
      });


      function createPlacemark(coords: any) {
        return new ymaps.Placemark(coords, {
          iconCaption: 'поиск...'
        }, {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true
        });
      }


      function getAddress(coords: any) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res: any) {
          var firstGeoObject = res.geoObjects.get(0);

          myPlacemark.properties
              .set({

                  iconCaption: [

                      firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),

                      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                  ].filter(Boolean).join(', '),

                  balloonContent: firstGeoObject.getAddressLine()
              });
        });
      }
    });
  }
}
