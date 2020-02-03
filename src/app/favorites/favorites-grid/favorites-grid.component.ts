import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';

@Component({
  selector: 'app-favorites-grid',
  templateUrl: './favorites-grid.component.html',
  styleUrls: ['./favorites-grid.component.css']
})
export class FavoritesGridComponent implements OnInit {

  public favorites$ =  this.favoritesService.favorites$;

  constructor(private favoritesService: FavoritesService) {

   }

  ngOnInit() {
  }

}
