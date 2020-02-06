import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  
  @Output()
  cancelEvent = new EventEmitter();

  @Output()
  okEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }


  public remove(){
    console.log('remove');
    this.okEvent.emit('ok');

  }

  public cancel() {
    console.log( 'cancel')
    this.cancelEvent.emit();
  }

}
