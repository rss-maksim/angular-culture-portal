import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsCardsListComponent } from './authors-cards-list.component';

describe('AuthorsCardsListComponent', () => {
  let component: AuthorsCardsListComponent;
  let fixture: ComponentFixture<AuthorsCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
