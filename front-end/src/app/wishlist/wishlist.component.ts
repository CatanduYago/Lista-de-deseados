import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { HttpClient } from '@angular/common/http';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router'; 

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  type: string;
  store: string;
  image: string;
  nivelDeDeseo: string;
  enlaceDeCompra: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {

  wishlistOpen = false;
  sizeOpen = false;
  purchasedOpen = false;
  wishlist: WishlistItem[] = [];
  selectedType: string | null = null;
  selectedStore: string | null = null;
  sortDirection: string = 'asc';
  itemToDelete: number | null = null;

  
  types: string[] = [];
  stores: string[]= []; 

  constructor(private filterService: FilterService, private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // Cambia la URL a la del servidor json-server
    this.http.get<WishlistItem[]>('http://localhost:3000/items').subscribe((data: WishlistItem[]) => {
      this.wishlist = data;

      // Recogemos de la base de datos los tipos y los guardamos en un array asegurandonos que no se repiten registros
      this.types = Array.from(new Set(data.map((item) => item.type)));

      //Recogemos de la base de datos las tiendas y las guardamos en un array asegurandonos que se repitan
      this.stores = Array.from(new Set(data.map((item) => item.store)));
    }, error => {
      console.error('Error al cargar los items:', error);
    });
  }

  // Metodos para alternar el estado de los acordeones

  toggleWishlist() {
    this.wishlistOpen = !this.wishlistOpen;
  }

  toggleSize() {
    this.sizeOpen = !this.sizeOpen;
  }
  applyFilters() {
    console.log('Aplicando filtros:', {
      type: this.selectedType,
      store: this.selectedStore,
    });
  }
  filterByType(type: string | null) {
    this.selectedType = type;
  }

  filterByStore(store: string | null) {
    this.selectedStore = store;
  }

  resetFilters() {
    this.selectedType = null;
    this.selectedStore = null;
  }

  sortByPrice(direction: string) {
    this.sortDirection = direction;
  }
  navigateToAddItemForm() {
    window.location.href = '/add-item';
  }

  getItemImage(imageName?: string): string {
    return imageName ? `assets/${imageName}` : 'assets/imagen_no_disponible.png';
  }
  editItem(item: WishlistItem) {
    console.log('Editando ítem:', item);
    // Redirige a la página de edición y pasa el id del ítem como parámetro
    this.router.navigate(['/edit-item', item.id]);
  }

  
  deleteItem(itemId: number) {
    this.http.delete(`http://localhost:3000/items/${itemId}`).subscribe(
      () => {
        
        // Filtra los ítems locales para eliminar el que fue borrado
        this.wishlist = this.wishlist.filter((item) => item.id !== itemId);
      },
      (error) => {
        console.error('Error al eliminar el ítem:', error);
      }
    );
  }
  mostrarModal(itemId: number) {
    this.itemToDelete = itemId;
    const modal = document.getElementById('confirmModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  // Confirmar eliminación
  confirmarDelete() {
    if (this.itemToDelete !== null) {
      this.deleteItem(this.itemToDelete);
      this.itemToDelete = null;
    }
  }
}
