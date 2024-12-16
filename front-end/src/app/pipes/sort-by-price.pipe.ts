import { Pipe, PipeTransform } from '@angular/core';
import { WishlistItem } from '../wishlist/wishlist.component';
export { SortByPricePipe };
@Pipe({
  name: 'filterByPrice',
})
class SortByPricePipe implements PipeTransform {
  transform(items: WishlistItem[], direction: string): WishlistItem[] {
    if (!items || !direction) return items;

    return items.sort((a, b) => {
      return direction === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}
