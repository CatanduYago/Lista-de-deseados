import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FilterComponent } from './filter/filter.component';
import { SizeComponent } from './size/size.component';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FilterByStorePipe } from './pipes/filter-by-store.pipe';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    FilterComponent,
    SizeComponent,
    FilterByTypePipe,
    FilterByStorePipe,
    SortByPricePipe,
    NavComponent,
    FormularioComponent,
    ConfirmModalComponent,
    EditItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
