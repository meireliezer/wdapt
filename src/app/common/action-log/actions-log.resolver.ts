import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { ActionsLogService } from './actions-log.service';
import { ActionLog } from 'src/app/model/action-log.interface';
import { take, tap } from 'rxjs/operators';


@Injectable()
export class ActionsLogResolver implements Resolve<Observable<ActionLog[]>> {
  constructor(private actionLogService: ActionsLogService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActionLog[]> {

    return this.actionLogService.get().pipe(
        tap(val => console.log('acions-log', val))        
    );
  }
}