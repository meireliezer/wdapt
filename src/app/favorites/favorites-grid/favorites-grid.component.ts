import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { SearchService } from 'src/app/common/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-grid',
  templateUrl: './favorites-grid.component.html',
  styleUrls: ['./favorites-grid.component.css']
})
export class FavoritesGridComponent implements OnInit, OnDestroy {

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
