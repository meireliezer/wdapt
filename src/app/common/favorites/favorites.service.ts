import { Injectable } from '@angular/core';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MyHttpService } from '../my-http/my-http.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favoritesList: FavoriteItem[] = []
  private favoriteSubject = new BehaviorSubject<FavoriteItem[]>([]);
  public favorites$ = this.favoriteSubject.asObservable();

  constructor(private myHttpService: MyHttpService) { 
  }


  public get():Observable<FavoriteItem[]>{
    return this.myHttpService.get<FavoriteItem[]>(`/api/favorites`).pipe(
      tap( val => {
        this.favoritesList = val;
        this.favoriteSubject.next([...this.favoritesList]);
      }),
      catchError(()=> of([]))
    );
  }


  public add(websiteName:string, url:string) {
     
    let favorite = {
      websiteName,
      url
    };

    this.myHttpService.post(`/api/favorites`, favorite).subscribe(
      (newItem: FavoriteItem) => {
        this.favoritesList.push(newItem);
        this.favoriteSubject.next([...this.favoritesList]);
      }       
    )    
  }


  public remove(id: number, websiteName:string, url:string){

    this.myHttpService.delete(`/api/favorites/${id}`).subscribe(
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

    this.myHttpService.put(`/api/favorites/${id}`, favorite).subscribe(
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
