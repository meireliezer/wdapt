import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseService {

  private BASE_URL_DEBUG = 'http://localhost:3000';

  public getUrlBase(isDebug = true){
    return (isDebug)? this.BASE_URL_DEBUG : '';
  }

  constructor() { }

}
