import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';

@Component({
  selector: 'app-favorites-tiles',
  templateUrl: './favorites-tiles.component.html',
  styleUrls: ['./favorites-tiles.component.css']
})
export class FavoritesTilesComponent implements OnInit {

  public favorites$ =  this.favoritesService.favorites$;

  constructor(private favoritesService: FavoritesService) {

   }

  ngOnInit() {
  }

}
