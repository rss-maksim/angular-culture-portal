import { Component, Input, OnInit } from '@angular/core';
import { WorksModel } from 'src/app/models/works.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() sights: WorksModel[];

  public sightsOnMap: WorksModel[];

  public isMapShown = false;

  constructor() { }

  ngOnInit(): void {
    this.sightsOnMap = this.sights.filter((sight) => {
      return sight.lat ? true : false;
    });
    this.isMapShown = this.sightsOnMap.length > 0;
  }

}
