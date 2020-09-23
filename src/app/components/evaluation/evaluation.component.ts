import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { ScopeService } from 'src/app/services/scope.service';
import { Scope } from 'src/app/models/scope.model';

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

  onSliderChanged(event: MatSliderChange, slider: Scope): void {
    slider.currentPoints = event.value;
  }

  saveUpdates(): void {
    this.scopeService.saveScope();
  }
}
