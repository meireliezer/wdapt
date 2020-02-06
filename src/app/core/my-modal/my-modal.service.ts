import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

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

  public openModal(component:any): Observable<any>{

    let subject =  new Subject();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // Data next

    componentRef.instance['cancelEvent'].subscribe( val => {
      console.log('cancelEvent');
      subject.next({operation:'cancel'})
      this.close();
    });

    componentRef.instance['okEvent'].subscribe( val => {
      console.log('okEvent: '+  val);
      subject.next({operation:'ok', data: val});
      this.close();
    });
    return subject.asObservable().pipe(take(1));
  }


  private close(){
    this.viewContainerRef.clear();
  }

}
