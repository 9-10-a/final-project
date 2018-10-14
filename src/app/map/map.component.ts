import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // initial position for map - Redding, California
  lat = 40.583333;
  lng = -122.366667;

  // google maps zoom level
  zoom = 13;

  /*onLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }*/

  /*clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }*/
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: Marker[] = [
    {
      lat: 40.5817815,
      lng: -122.3559081,
      label: 'Planet Fitness',
      draggable: false
    },
    {
      lat: 40.5571184,
      lng: -122.3067689,
      label: 'Sun Oaks Tennis and Fitness',
      draggable: false
    },
    {
      lat: 40.5840854,
      lng: -122.3749692,
      label: 'Shasta Athletic Club',
      draggable: false
    },
    {
      lat: 40.5813204,
      lng: -122.3930377,
      label: 'Align',
      draggable: false
    },
    {
      lat: 40.5732405,
      lng: -122.3748009,
      label: 'Monster Fitness',
      draggable: false
    },
    {
      lat: 40.5672764,
      lng: -122.362331,
      label: 'GCD Fitness',
      draggable: false
    }
  ];
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
