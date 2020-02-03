import { Component, OnInit } from '@angular/core';
import {ActionsLogService } from '../../common/action-log/actions-log.service';
import { Observable } from 'rxjs';
import { ActionLog } from 'src/app/model/action-log.interface';

@Component({
  selector: 'app-action-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent implements OnInit {

  
  public actions$ = this.actionsService.actions$;
  
  constructor(private  actionsService: ActionsLogService) { 
    
  }

  ngOnInit() {


  }

}
