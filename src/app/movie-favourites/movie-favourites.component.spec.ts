import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavouritesComponent } from './movie-favourites.component';

describe('MovieFavouritesComponent', () => {
  let component: MovieFavouritesComponent;
  let fixture: ComponentFixture<MovieFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
