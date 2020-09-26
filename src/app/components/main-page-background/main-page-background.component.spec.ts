import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBackgroundComponent } from './main-page-background.component';

describe('MainPageBackgroundComponent', () => {
  let component: MainPageBackgroundComponent;
  let fixture: ComponentFixture<MainPageBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
