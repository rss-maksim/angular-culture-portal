export class Scope {
  private _currentPoints: number;

  constructor(public description: string, public maxPoints: number, public scopes?: Scope[]) { }

  set currentPoints(points: number) {
    this._currentPoints = points;
  }

  get currentPoints(): number {
    return this.scopes
      ? this.scopes.reduce((total, { currentPoints }) => total + currentPoints, 0)
      : this._currentPoints;
  }

  get step(): number {
    return this.maxPoints > 0 ? this.maxPoints >>> 1 : 5;
  }

  setAllCurrentPoints(points: number | any[]) {
    if (this.scopes) {
      this.scopes.forEach((scope, index) => scope.setAllCurrentPoints(points[index]));
    } else {
      this.currentPoints = points as number;
    }
  }

  get min(): number {
    return Math.min(this.maxPoints, 0);
  }

  get max(): number {
    return Math.max(this.maxPoints, 0);
  }
}
