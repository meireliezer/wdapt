import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyModalService {



  private viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }



  public setViewContainerRef(viewContainerRef: ViewContainerRef){
    this.viewContainerRef= viewContainerRef;
  }

  public openModal(component:any){

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // Data next

  }

}
