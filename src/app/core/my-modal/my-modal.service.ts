import { Injectable, ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalReturnData, ModalCancel, ModalOk } from 'src/app/model/modal.interface';

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

  public openModal(component:any, data?:any): Observable<ModalReturnData>{
    
    let subject =  new Subject<ModalReturnData>();
   
    // Component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    
    // Background
    let backgroundElem = document.querySelector('.app-my-modal-background');
    backgroundElem['style']['visibility'] =  'visible';
      
    // Register to the events
    componentRef.instance['cancelEvent'].subscribe( val => {      
      subject.next({operation:ModalCancel})
      this.close();
    });

    componentRef.instance['okEvent'].subscribe( data => {      
      subject.next({operation:ModalOk, data: data});
      this.close();
    });

    // Pass data to input
    if(data) {
      componentRef.instance['data'] = data;
    }


    return subject.asObservable().pipe(take(1));
  }


  private close(){
    this.viewContainerRef.clear();
    let backgroundElem = document.querySelector('.app-my-modal-background');
    backgroundElem['style']['visibility'] =  'hidden';
  }

}
