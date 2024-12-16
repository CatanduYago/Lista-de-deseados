import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SizeComponent } from './size/size.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditItemComponent } from './edit-item/edit-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/wishlist', pathMatch: 'full' }, // Redirige a la wishlist por defecto
  { path: 'wishlist', component: WishlistComponent },
  { path: 'size', component: SizeComponent },
  { path: 'add-item', component: FormularioComponent },
  { path: 'edit-item/:id', component: EditItemComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
