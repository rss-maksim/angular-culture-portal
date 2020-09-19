import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorFullViewComponent } from './author-full-view.component';

describe('AuthorFullViewComponent', () => {
  let component: AuthorFullViewComponent;
  let fixture: ComponentFixture<AuthorFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
