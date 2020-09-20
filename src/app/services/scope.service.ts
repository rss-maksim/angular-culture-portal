import { Injectable } from '@angular/core';

import { SCOPES } from '../constants/scope.const';
import { SELF_EVALUATION, STORAGE_EVALUATION_KEY } from '../constants/scope-self-evaluation.const';
import { Scope } from '../constants/scope.model';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  constructor() {
    const storedEvaluation = localStorage.getItem(STORAGE_EVALUATION_KEY);
    let evaluation: number[][] = SELF_EVALUATION;
    if (storedEvaluation) {
      try {
        evaluation = JSON.parse(storedEvaluation);
      } catch (error) {
        evaluation = SELF_EVALUATION;
      }
    }
    SCOPES.setAllCurrentPoints(evaluation);
  }

  saveScope(): void {
    const storedEvaluation = SCOPES.scopesToArray();
    localStorage.setItem(STORAGE_EVALUATION_KEY, JSON.stringify(storedEvaluation));
  }

  get scope(): Scope {
    return SCOPES;
  }
}
