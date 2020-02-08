import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionFormatterPipe } from './action-formatter/action-formatter.pipe';
import { MyModalDirective } from './my-modal/my-modal.directive';
import { MyModalService } from './my-modal/my-modal.service';
import { SearchService } from '../common/search/search.service';
import { SearchFilterPipe } from './search-filter/search-filter.pipe';



@NgModule({
  declarations: [
    ActionFormatterPipe,
    MyModalDirective,
    SearchFilterPipe
  ],
  exports:[
    ActionFormatterPipe,
    SearchFilterPipe,
    MyModalDirective
  ],
  providers:[
    MyModalService,
    SearchService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
