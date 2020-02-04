import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  private _isGrid = false;
  private activatedRouteSubscribtion;

  public get isGrid() {
    return this._isGrid;
  }
  
  
  constructor(private  activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this._isGrid = (this.router.url.indexOf('grid') !== -1);
  }


  public toggle(target:string) {
    switch(target) {
      case 'GRID':
        this._isGrid = true;
        this.router.navigate(['favorites/grid']);
        break;
      case 'TILES':
        this._isGrid = false;
        this.router.navigate(['favorites/tiles']);
        break;
    }

  }



}
