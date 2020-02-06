import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyModal]'
})
export class MyModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
