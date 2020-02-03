import { Pipe, PipeTransform } from '@angular/core';
import { ActionEnum } from 'src/app/model/action-log.interface';

@Pipe({
  name: 'actionFormatter'
})
export class ActionFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let actionMessage = '';
    switch(value){
      case ActionEnum.add:
        actionMessage = 'Website was added';
        break;
      case ActionEnum.delete:
        actionMessage = 'Website was deleted';
        break;
      case ActionEnum.edit:
        actionMessage = 'Website was edited';
        break;          
    }
    
    return actionMessage;
  }

}
