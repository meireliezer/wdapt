import { Component } from '@angular/core';
import {ActionsLogService } from '../../common/action-log/actions-log.service';

@Component({
  selector: 'app-action-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent {

  public actions$ = this.actionsService.actions$;
  
  constructor(private  actionsService: ActionsLogService) { 
  }

}
