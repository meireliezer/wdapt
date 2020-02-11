import { Injectable } from '@angular/core';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionsLogService } from '../action-log/actions-log.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UrlBaseService } from '../url-base/url-base.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favoritesList: FavoriteItem[] = []
  private favoriteSubject = new BehaviorSubject<FavoriteItem[]>([]);
  public favorites$ = this.favoriteSubject.asObservable();

  constructor(private http: HttpClient,
              private urlBase: UrlBaseService) { 
  }


  public get():Observable<FavoriteItem[]>{
    return this.http.get<FavoriteItem[]>(`${this.urlBase.getUrlBase()}/api/favorites`).pipe(
      tap( val => {
        this.favoritesList = val;
        this.favoriteSubject.next([...this.favoritesList]);
      })
    );
  }


  public add(websiteName:string, url:string) {
     
    let favorite = {
      websiteName,
      url
    };

    this.http.post(`${this.urlBase.getUrlBase()}/api/favorites`, favorite).subscribe(
      (newItem: FavoriteItem) => {
        this.favoritesList.push(newItem);
        this.favoriteSubject.next([...this.favoritesList]);
      }       
    )    
  }


  public remove(id: number, websiteName:string, url:string){

    this.http.delete(`${this.urlBase.getUrlBase()}/api/favorites/${id}`).subscribe(
      () => {
        let index = this.favoritesList.findIndex( item => item.id === id);    
        if(index !== -1){
          this.favoritesList.splice(index, 1);
          this.favoriteSubject.next([...this.favoritesList]);
        }
      }  
    )
  }


  public edit(id: number, websiteName:string, url:string) {
    let favorite = {
      id,
      websiteName,
      url      
    };

    this.http.put(`${this.urlBase.getUrlBase()}/api/favorites/${id}`, favorite).subscribe(
      _=>{
        let favorite = this.favoritesList.find( item => item.id === id);
        if(favorite){
          favorite.websiteName = websiteName;
          favorite.url = url;
          this.favoriteSubject.next([...this.favoritesList]);
        }    
      }
    );
  }

}
