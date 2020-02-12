import { NgModule } from '@angular/core';
import { SearchService } from './search/search.service';
import { FavoritesService } from './favorites/favorites.service';
import { ActionsLogService } from './action-log/actions-log.service';
import { MyHttpService } from './my-http/my-http.service';



@NgModule({
  declarations: [],
  imports: [],
  providers: [
    SearchService,
    FavoritesService, 
    ActionsLogService,
    MyHttpService 
  ]

})
export class CommonModule { }
