import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTilesComponent } from './favorites-tiles.component';

describe('FavoritesTilesComponent', () => {
  let component: FavoritesTilesComponent;
  let fixture: ComponentFixture<FavoritesTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesTilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
