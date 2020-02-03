import { Injectable } from '@angular/core';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { BehaviorSubject } from 'rxjs';

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



  constructor() { 

    setTimeout( ()=> {
      this.favoriteSubject.next(this.favoritesList);
    }, 0);

  }
}
