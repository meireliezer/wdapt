import { Pipe, PipeTransform } from '@angular/core';
import { utimes } from 'fs';
import { FavoriteItem } from 'src/app/model/favorite-item.interface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let filterTxt = args[0];
    let favoriteItems: Array<FavoriteItem> = value;
    return favoriteItems.filter( item => ((item.websiteName.indexOf(filterTxt) !== -1) || (item.url.indexOf(filterTxt) !== -1)));
  }

}
