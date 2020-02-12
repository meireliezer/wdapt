import { Injectable } from '@angular/core';
import { ActionLog } from 'src/app/model/action-log.interface';
import { BehaviorSubject,  Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { MyHttpService } from '../my-http/my-http.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsLogService {
  
  private actionsSubject = new BehaviorSubject<ActionLog[]>([]);
  public actions$: Observable<ActionLog[]> = this.actionsSubject.asObservable();
    

  constructor(private myHttpService: MyHttpService) {
  }

   public get(): Observable<ActionLog[]>{
      return this.myHttpService.get<ActionLog[]>(`/api/actions-log`).pipe(
        tap(val => {                    
          this.actionsSubject.next(val);
          })
      );            
   }
}


