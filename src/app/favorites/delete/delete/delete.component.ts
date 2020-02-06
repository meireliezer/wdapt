import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public remove(){
    console.log('remove');
  }

  public cancel() {
    console.log( 'cancel')
  }

}
