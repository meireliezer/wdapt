import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subscription  } from 'rxjs';
import { map, distinctUntilChanged, debounce, debounceTime, tap } from 'rxjs/operators';
import { SearchService } from 'src/app/common/search/search.service';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit, OnDestroy{

  public filter: string;
  public displayAddDialog =  false;

  public get isGrid() {
    return this._isGrid;
  }

  @Input()
  public websiteName: string = '';

  @Input()
  public url:string = '';
  
  @ViewChild('search', {static: true})
  private _searchElem: ElementRef

  @ViewChild('f', {static: false})
  private _addForm: NgForm;

  private _isGrid = false;
  private filterSubsciption: Subscription;

  constructor(private  activatedRoute: ActivatedRoute, 
              private router: Router,
              private searchService: SearchService,
              private favoritesService: FavoritesService) {
    
  }

  ngOnInit() {
    this._isGrid = (this.router.url.indexOf('grid') !== -1);    
  }

  ngAfterViewInit(): void {    
    let filter$ = fromEvent(this._searchElem.nativeElement, 'keyup').pipe(
      map( (event:any) => event.target.value.trim()),
      debounceTime(400),
      distinctUntilChanged(),
      tap(val => console.log(val))
    );

    this.filterSubsciption = filter$.subscribe(val => this.searchService.filter(val) );
  }

  ngOnDestroy(): void {
    this.filterSubsciption.unsubscribe();
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
