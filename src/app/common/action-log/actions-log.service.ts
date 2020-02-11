import { Injectable } from '@angular/core';
import { ActionLog, ActionEnum } from 'src/app/model/action-log.interface';
import { BehaviorSubject, of, Observable, VirtualTimeScheduler} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UrlBaseService } from '../url-base/url-base.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsLogService {
  
  private actionsSubject = new BehaviorSubject<ActionLog[]>([]);
  public actions$: Observable<ActionLog[]> = this.actionsSubject.asObservable();
    

  constructor(private http: HttpClient,
              private urlBase: UrlBaseService) {
  }

   public get(): Observable<ActionLog[]>{
      return this.http.get<ActionLog[]>(`${this.urlBase.getUrlBase()}/api/actions-log`).pipe(
        tap(val => {                    
          this.actionsSubject.next(val);
          })
      );      
   }
}
