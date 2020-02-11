import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { ActionLog } from 'src/app/model/action-log.interface';
import { take, tap } from 'rxjs/operators';
import { FavoritesService } from './favorites.service';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';


@Injectable()
export class FavoritesResolver implements Resolve<Observable<FavoriteItem[]>> {
    constructor(private favoritesService: FavoritesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FavoriteItem[]> {

        return this.favoritesService.get().pipe(
            tap(val => console.log('favorites resolvers', val))        
        );
    }
    

}