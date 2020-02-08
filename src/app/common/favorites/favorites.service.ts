import { Injectable } from '@angular/core';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { BehaviorSubject } from 'rxjs';
import { ActionsLogService } from '../action-log/actions-log.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {


  private favoritesList: FavoriteItem[] = [
    {
      id: 1,
      websiteName: 'ynet',
      url: 'http://ynet.co.il',
      img: '//unsplash.it/300/201',      
    },
    {
      id: 2,
      websiteName: 'cnn',
      url: 'http://cnn.com',
      img: '//unsplash.it/301/200',      
    },
    {
      id: 3,
      websiteName: 'facebook',
      url: 'http://facebook.com',
      img: '//unsplash.it/301/201',      
    },
    {
      id: 4,
      websiteName: 'hotmail.com',
      url: 'http://hotmail.com',
      img: '//unsplash.it/300/200',      
    },
    {
      id: 5,
      websiteName: 'google',
      url: 'http://google.com',
      img: '//unsplash.it/302/200',      
    },
    {
      id: 6,
      websiteName: 'angular univeristy',
      url: 'https://angular-university.io/',
      img: '//unsplash.it/302/201',      
    }
  ];

  private favoriteSubject = new BehaviorSubject<FavoriteItem[]>([]);
  public favorites$ = this.favoriteSubject.asObservable();



  constructor(private actionsLogService:ActionsLogService) { 

    setTimeout( ()=> {
      this.favoriteSubject.next(this.favoritesList);
    }, 0);

  }


  public add(websiteName:string, url:string) {
    let id = Math.trunc(Math.random()*100);
    let width = 300 + Math.trunc(Math.random()*10);
    let height = 200 +Math.trunc(Math.random()*10);
    this.favoritesList.push({
      id: id,
      img: `//unsplash.it/${width}/${height}`,
      websiteName,
      url
    });
    
    this.favoriteSubject.next([...this.favoritesList]);
    this.actionsLogService.add(websiteName, url);
  }


  public remove(id: number, websiteName:string, url:string){
    let index = this.favoritesList.findIndex( item => item.id === id);
    if(index !== -1){
      this.favoritesList.splice(index, 1);
      this.favoriteSubject.next([...this.favoritesList]);
      this.actionsLogService.delete(websiteName, url);
    }
  }


  public edit(id: number, websiteName:string, url:string) {
    let favorite = this.favoritesList.find( item => item.id === id);
    if(favorite){
      favorite.websiteName = websiteName;
      favorite.url = url;
      this.favoriteSubject.next([...this.favoritesList]);
      this.actionsLogService.edit(id, websiteName, url);

    }

  }

}
