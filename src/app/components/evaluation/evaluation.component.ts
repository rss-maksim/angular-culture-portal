import { Component, OnInit } from '@angular/core';

import { ScopeService } from 'src/app/services/scope.service';
import { Scope } from 'src/app/constants/scope.model';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  scope: Scope;

  constructor(private scopeService: ScopeService) { }

  ngOnInit(): void {
    this.scope = this.scopeService.scope;
  }

  onSliderChanged(event: MatSliderChange, slider: Scope) {
    console.log('event', event);
    slider.currentPoints = event.value;

  }
}
