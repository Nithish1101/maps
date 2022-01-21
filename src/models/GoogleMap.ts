import { Company } from "./Company";
import { User } from "./User";

import { Mappable } from "../interfaces/Mappable";

export class GoogleMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    const mapOptions = {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    };
    this.map = new google.maps.Map(document.getElementById(divId), mapOptions);
  }

  addMarker(entity: Mappable) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: entity.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.markerContent()
      });

      infoWindow.open(this.map, marker);
    });
  }
}
