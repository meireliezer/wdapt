import { Injectable } from '@angular/core';
import { ActionLog, ActionEnum } from 'src/app/model/action-log.interface';
import { BehaviorSubject, of, Observable, VirtualTimeScheduler, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
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
          }),
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError) // then handle the error
      );      
   }


   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}


