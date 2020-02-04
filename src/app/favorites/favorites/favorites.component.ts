import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent  } from 'rxjs';
import { map, distinctUntilChanged, debounce, debounceTime, tap } from 'rxjs/operators';
import { SearchService } from 'src/app/common/search/search.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit{

  public get isGrid() {
    return this._isGrid;
  }

  public filter: string;
  
  
  @ViewChild('search', {static: true})
  private _searchElem: ElementRef
  
  private _isGrid = false;


  constructor(private  activatedRoute: ActivatedRoute, 
              private router: Router,
              private searchService: SearchService) {
    
  }


  ngOnInit() {
    this._isGrid = (this.router.url.indexOf('grid') !== -1);    
  }


  ngAfterViewInit(): void {
    console.log(this._searchElem );
    fromEvent(this._searchElem.nativeElement, 'keyup').pipe(
      map( (event:any) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      tap(val => console.log(val))
    )
    .subscribe(val => this.searchService.filter(val) );
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
