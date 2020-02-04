import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchSubject = new BehaviorSubject<string>('');
  public search$ = this._searchSubject.asObservable();

  constructor() { }

  public filter(filter: string) {
    this._searchSubject.next(filter);
  }

}
