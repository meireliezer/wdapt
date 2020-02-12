import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  
  private BASE_URL_DEBUG = 'http://localhost:3000';
  private isDebug = false;
  
  constructor(private http: HttpClient) { 
  }

  public get<T>(api:string): Observable<T> {
    return this.http.get<T>(`${this.getUrlBase()}${api}`).pipe(     
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    );   
  }

  public post(api:string, body:any) : Observable<Object> {
    return this.http.post(`${this.getUrlBase()}${api}`, body).pipe(     
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      ); 
  }

  public delete(api:string) : Observable<Object> {
    return this.http.delete(`${this.getUrlBase()}${api}`).pipe(     
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      ); 
  }


  public put(api:string, body: any): Observable<Object> {
    return this.http.put(`${this.getUrlBase()}${api}`, body).pipe(     
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      ); 
  }

  private getUrlBase(){

    return (this.isDebug)? this.BASE_URL_DEBUG : '';
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
