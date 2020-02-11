import { Injectable } from '@angular/core';
import { ActionLog, ActionEnum } from 'src/app/model/action-log.interface';
import { BehaviorSubject, of, Observable, VirtualTimeScheduler} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionsLogService {

  private BASE_URL_DEBUG = 'http://localhost:3000';
  
  private actionsSubject = new BehaviorSubject<ActionLog[]>([]);
  public actions$: Observable<ActionLog[]> = this.actionsSubject.asObservable();
    

  constructor(private http: HttpClient) {
  }

   public get(): Observable<ActionLog[]>{
      return this.http.get<ActionLog[]>(`${this.BASE_URL_DEBUG}/api/actions-log`).pipe(
        tap(val => {          
          console.log('actions-log:get():',val);
          this.actionsSubject.next(val);
          })
      );      
   }
}
