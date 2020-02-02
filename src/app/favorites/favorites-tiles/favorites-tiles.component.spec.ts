import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTileComponent } from './favorites-tile.component';

describe('FavoritesTileComponent', () => {
  let component: FavoritesTileComponent;
  let fixture: ComponentFixture<FavoritesTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
