import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { FavoritesGridComponent } from './favorites/favorites-grid/favorites-grid.component';
import { FavoritesTilesComponent } from './favorites/favorites-tiles/favorites-tiles.component';
import { ActionsLogComponent } from './actions-log/actions-log/actions-log.component';
import { ActionsLogService} from './common/action-log/actions-log.service';
import { ActionFormatterPipe } from './core/action-formatter/action-formatter.pipe';
import { FavoritesService } from './common/favorites/favorites.service';
import { SearchFilterPipe } from './core/search-filter/search-filter.pipe';
import { MyModalDirective } from './core/my-modal/my-modal.directive';
import { DeleteComponent } from './favorites/delete/delete/delete.component';
import { EditComponent } from './favorites/edit/edit/edit.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';


const appRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent,
    children: [
      {
        path: 'grid',
        component: FavoritesGridComponent
      },
      {
        path: 'tiles',
        component: FavoritesTilesComponent      
      },
      { path: '',
        redirectTo: '/favorites/grid',
        pathMatch: 'full'
      },

    ]
  },
  { 
    path: 'action-log',      
    component: ActionsLogComponent 
  },  
  { path: '',
    redirectTo: '/favorites/grid',
    pathMatch: 'full'
  },
  { path: '**', component: FavoritesComponent /*PageNotFoundComponent*/ }
];

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    FavoritesGridComponent,
    FavoritesTilesComponent,
    ActionsLogComponent,        
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ), 
    CommonModule,
    CoreModule
    
  ],
  providers: [],
  entryComponents:[DeleteComponent, EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
