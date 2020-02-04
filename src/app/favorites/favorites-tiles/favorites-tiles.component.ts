import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/common/search/search.service';

@Component({
  selector: 'app-favorites-tiles',
  templateUrl: './favorites-tiles.component.html',
  styleUrls: ['./favorites-tiles.component.css']
})
export class FavoritesTilesComponent implements OnInit, OnDestroy {

  public favorites$ =  this.favoritesService.favorites$;
  public filterTxt: string = '';


  private _searchSubscribe:Subscription;

  constructor(private favoritesService: FavoritesService,
    private searchService: SearchService) {
      this._searchSubscribe = this.searchService.search$
      .subscribe(filterTxt => this.filterTxt = filterTxt);
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._searchSubscribe.unsubscribe();
  }
}
