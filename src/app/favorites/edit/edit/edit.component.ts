import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  @Input()
  public data: FavoriteItem

  @Output()
  cancelEvent = new EventEmitter();

  @Output()
  okEvent = new EventEmitter();
  
  constructor() { 
    this.data = {
      id:1, 
      websiteName: 'ji',
      url: 'sds', 
      img : ''
    };
  }

  ngOnInit() {
  }

  public save(){    
    this.okEvent.emit(this.data);
  }

  public cancel(){    
    this.cancelEvent.emit();
  }

  public isValid() {
    return this.data.websiteName.trim().length !== 0 && this.data.url.trim() !== '';
  }

}
