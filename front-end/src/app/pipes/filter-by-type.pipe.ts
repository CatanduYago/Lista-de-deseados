import { Pipe, PipeTransform } from '@angular/core';
import { WishlistItem } from '../wishlist/wishlist.component'; // Replace '../path/to/wishlist-item.model' with the actual path to the WishlistItem model file
export {FilterByTypePipe};
@Pipe({
  name: 'filterByType',
})
class FilterByTypePipe implements PipeTransform {
  transform(
    items: WishlistItem[],
    selectedType: string | null
  ): WishlistItem[] {
    if (!items || !selectedType) {
      return items;
    }
    return items.filter((item) => item.type === selectedType);
  }
}
