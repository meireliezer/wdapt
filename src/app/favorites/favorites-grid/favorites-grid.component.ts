import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { SearchService } from 'src/app/common/search/search.service';
import { Subscription } from 'rxjs';
import { MyModalService } from 'src/app/core/my-modal/my-modal.service';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { DeleteComponent } from '../delete/delete/delete.component';
import { ModalOk } from 'src/app/model/modal.interface';
import { EditComponent } from '../edit/edit/edit.component';

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
              private searchService: SearchService, 
              private myModalServcice: MyModalService) {


      this._searchSubscribe = this.searchService.search$
      .subscribe(filterTxt => this.filterTxt = filterTxt);
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._searchSubscribe.unsubscribe();
  }


  public delete(favorite:FavoriteItem){
    this.myModalServcice.openModal(DeleteComponent)
    .subscribe(val => {
      if(val.operation === ModalOk){
        this.favoritesService.remove(favorite.id, favorite.websiteName, favorite.url);
      }
    });;

  }


  public edit(favorite:FavoriteItem){
    this.myModalServcice.openModal(EditComponent,favorite)
    .subscribe((data: any) => {
      if(data.operation === ModalOk){
        this.favoritesService.edit(favorite.id, data.data.websiteName, data.data.url);
      }
    });;

  }




}
