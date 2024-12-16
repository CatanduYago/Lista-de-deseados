import { Pipe, PipeTransform } from '@angular/core';
import { WishlistItem } from '../wishlist/wishlist.component'; // Replace '../path/to/wishlist-item.model' with the actual path to the WishlistItem model file
export {FilterByStorePipe};
@Pipe({
  name: 'filterByStore',
})
class FilterByStorePipe implements PipeTransform {
  transform(
    items: WishlistItem[],
    selectedStore: string | null
  ): WishlistItem[] {
    if (!items || !selectedStore) {
      return items;
    }
    return items.filter((item) => item.store === selectedStore);
  }
}
