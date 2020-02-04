import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent  } from 'rxjs';
import { map, distinctUntilChanged, debounce, debounceTime, tap } from 'rxjs/operators';
import { SearchService } from 'src/app/common/search/search.service';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { NgForm } from '@angular/forms';

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
  public displayAddDialog =  true;


  @Input()
  public websiteName: string = '';
  @Input()
  public url:string = '';
  
  @ViewChild('search', {static: true})
  private _searchElem: ElementRef


  
  @ViewChild('f', {static: false})
  private _addForm: NgForm;

  private _isGrid = false;


  constructor(private  activatedRoute: ActivatedRoute, 
              private router: Router,
              private searchService: SearchService,
              private favoritesService: FavoritesService) {
    
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


    console.log('Form:', this._addForm);
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

  public addNewWebsite() {
    this.displayAddDialog =  true;
  }

  public closeNewAddDialog() {
    this.displayAddDialog = false;
    this.resetAddData();    
  }

  public submit(){
    console.log('Form:', this._addForm);

    console.log( `website name: ${this.websiteName}   url: ${this.url}`);
    this.favoritesService.add(this.websiteName, this.url);
    this.displayAddDialog = false;
    this.resetAddData();    
  }

  public isValid(){
    if(this._addForm && this._addForm.value && this._addForm.value.websiteName){
      return this._addForm.valid && (this._addForm.value.websiteName.trim() !== '') && (this._addForm.value.url.trim() !== '');
    }
    return false;
    
  }

  private resetAddData(){
    this.websiteName = '';
    this.url = '';
  }

}
