import { Injectable } from '@angular/core';
import { ActionLog, ActionEnum } from 'src/app/model/action-log.interface';
import { BehaviorSubject, of, Observable, VirtualTimeScheduler} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsLogService {


  private actionList: Array<ActionLog> = [
    {
      id: 1,
      date: Date.now(),
      websiteName: 'ynet',
      url:'http://ynet.co.il',
      type: ActionEnum.add
    },
    {
      id: 2,
      date: Date.now(),
      websiteName: 'cnn',
      url:'http://cnn.com',
      type: ActionEnum.add
    },
    {
      id: 3,
      date: Date.now(),
      websiteName: 'facbook',
      url:'http://facebook',
      type: ActionEnum.edit
    },
    {
      id: 4,
      date: Date.now(),
      websiteName: 'hotmail',
      url:'http://hotmail.com',
      type: ActionEnum.delete
    }
  ];


  private actionsSubject = new BehaviorSubject<ActionLog[]>([]);
  public actions$: Observable<ActionLog[]> = this.actionsSubject.asObservable();
    

  constructor() {
    this.actionsSubject.next(this.actionList);
   }


   public add(websiteName: string, url: string) {
     let action: ActionLog = {
       id: this.actionList.length,
       websiteName, 
       url,
       date: Date.now(),
       type: ActionEnum.add
     }


     this.actionList.push(action);
     this.actionsSubject.next(this.actionList);
   }


   public edit(id: number, websiteName: string, url: string) {
    let action =  this.actionList.find( action => action.id === id);
    if(action){
      action.websiteName = websiteName || action.websiteName;
      action.url = url || action.url;
    }    
    this.actionsSubject.next(this.actionList);
  }

  public delete(id: number) {
    let actionIdx =  this.actionList.findIndex( action => action.id === id);
    if(actionIdx >= 0){
      this.actionList.splice(actionIdx, 1);
      this.actionsSubject.next(this.actionList);
    }    
   
  }

}