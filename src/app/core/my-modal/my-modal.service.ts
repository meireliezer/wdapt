import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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

  public openModal(component:any): Observable<ModalReturnData>{

    let subject =  new Subject<ModalReturnData>();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // Data next

    componentRef.instance['cancelEvent'].subscribe( val => {      
      subject.next({operation:ModalCancel})
      this.close();
    });

    componentRef.instance['okEvent'].subscribe( val => {      
      subject.next({operation:ModalOk, data: val});
      this.close();
    });
    return subject.asObservable().pipe(take(1));
  }


  private close(){
    this.viewContainerRef.clear();
  }

}
