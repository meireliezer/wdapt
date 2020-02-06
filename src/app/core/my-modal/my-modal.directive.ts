import { Directive, ViewContainerRef, OnInit } from '@angular/core';
import { MyModalService } from './my-modal.service';

@Directive({
  selector: '[app-my-modal]'
})
export class MyModalDirective implements OnInit{

  constructor(public viewContainerRef: ViewContainerRef, 
              private myModalService: MyModalService) {           
              }


  ngOnInit(){
    this.myModalService.setViewContainerRef(this.viewContainerRef)
  }

}
