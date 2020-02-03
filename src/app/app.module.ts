import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { FavoritesGridComponent } from './favorites/favorites-grid/favorites-grid.component';
import { FavoritesTilesComponent } from './favorites/favorites-tiles/favorites-tiles.component';
import { ActionsLogComponent } from './actions-log/actions-log/actions-log.component';
import { ActionsLogService} from './common/action-log/actions-log.service';
import { ActionFormatterPipe } from './core/action-formatter/action-formatter.pipe';



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
      { path: 'favorites',
        redirectTo: '/favorites/tiles',
        pathMatch: 'full'
      },

    ]
  },

  { path: 'action-log',      component: ActionsLogComponent },
  { path: '',
    redirectTo: '/favorites',
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
    ActionFormatterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    
  ],
  providers: [ActionsLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
