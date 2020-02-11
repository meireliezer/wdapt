import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { ActionsLogService } from './actions-log.service';
import { ActionLog } from 'src/app/model/action-log.interface';


@Injectable()
export class ActionsLogResolver implements Resolve<Observable<ActionLog[]>> {
  constructor(private actionLogService: ActionsLogService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActionLog[]> {
    
    let subect = new Subject<ActionLog[]>();

    
    this.actionLogService.get().subscribe (val =>{
        subect.next(val);
        subect.complete();
    });


    return subect.asObservable();
  }

}