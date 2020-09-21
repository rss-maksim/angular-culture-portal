export class Scope {
  private aCurrentPoints: number;

  constructor(public description: string, public maxPoints: number, public scopes?: Scope[]) { }

  set currentPoints(points: number) {
    this.aCurrentPoints = points;
  }

  get currentPoints(): number {
    return this.scopes
      ? this.scopes.reduce((total, { currentPoints }) => total + currentPoints, 0)
      : this.aCurrentPoints;
  }

  get step(): number {
    return this.maxPoints > 0 ? (this.maxPoints / 2) : 5;
  }

  get min(): number {
    return Math.min(this.maxPoints, 0);
  }

  get max(): number {
    return Math.max(this.maxPoints, 0);
  }

  setAllCurrentPoints(points: number | any[]): void {
    if (this.scopes) {
      this.scopes.forEach((scope, index) => scope.setAllCurrentPoints(points[index]));
    } else {
      this.currentPoints = points as number;
    }
  }

  scopesToArray(): number[] | number {
    if (this.scopes) {
      return this.scopes.reduce((total, scope) => [...total, scope.scopesToArray()], []);
    }
    return this.currentPoints;
  }
}
