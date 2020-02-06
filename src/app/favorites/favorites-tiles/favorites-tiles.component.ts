import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/common/search/search.service';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { MyModalService } from 'src/app/core/my-modal/my-modal.service';
import { DeleteComponent } from '../delete/delete/delete.component';
import { ModalOk } from 'src/app/model/modal.interface';

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
              private searchService: SearchService,
              private modalService:MyModalService) {


      this._searchSubscribe = this.searchService.search$
      .subscribe(filterTxt => this.filterTxt = filterTxt);
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._searchSubscribe.unsubscribe();
  }


  public delete(favorite: FavoriteItem){
    this.modalService.openModal(DeleteComponent).subscribe( val => {
      if(val.operation === ModalOk){
        this.favoritesService.remove(favorite.id, favorite.websiteName, favorite.url);
      }
    });

  }

  public edit(favorite:FavoriteItem){

  }
}
