import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { FavoritesGridComponent } from './favorites/favorites-grid/favorites-grid.component';
import { FavoritesTilesComponent } from './favorites/favorites-tiles/favorites-tiles.component';
import { ActionLogComponent } from './action-log/action-log/action-log.component';


const appRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent,
    children: [
      {
        path: 'grid',
        component: FavoritesGridComponent
      },
      {
        path: 'tile',
        component: FavoritesTilesComponent
      },
      { path: 'favorites',
        redirectTo: '/favorites/grid',
        pathMatch: 'full'
      },

    ]
  },

  { path: 'action-log',      component: ActionLogComponent },
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
    ActionLogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
