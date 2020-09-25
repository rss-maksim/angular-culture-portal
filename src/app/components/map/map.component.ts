import { AgmMarker } from '@agm/core';
import { Component, Input, OnChanges } from '@angular/core';
import { WorksModel } from 'src/app/models/works.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  @Input() sights: WorksModel[];

  public sightsOnMap: WorksModel[];

  public map: google.maps.Map;

  public isMapShown = false;
  public latitude: number;
  public longitude: number;
  constructor() { }

  public ngOnChanges(): void {
    this.sightsOnMap = this.sights.filter((sight) => {
      return sight.lat ? true : false;
    });
    if (this.sightsOnMap.length > 0) {
      this.isMapShown = true;
      this.latitude = this.sightsOnMap[0].lat;
      this.longitude = this.sightsOnMap[0].lng;
    }
  }

  public onMapReady(map: google.maps.Map): void {
    this.map = map;
  }

  public onMarkerClick(marker: AgmMarker): void {
    this.map.setCenter({
      lat: marker.latitude,
      lng: marker.longitude
    });
    this.map.setZoom(12);
  }
}
