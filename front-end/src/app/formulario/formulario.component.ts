import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producform',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  currentItem = {
    name: '',
    price: 0,
    type: '',
    store: '',
    nivelDeDeseo: false,
    enlaceDeCompra: ''
  };
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  async onSubmit() {
    const id = await this.getNextId();
    
    const body = {
      id: id,
      name: this.currentItem.name,
      price: this.currentItem.price,
      type: this.currentItem.type,
      store: this.currentItem.store,
      nivelDeDeseo: this.currentItem.nivelDeDeseo,
      enlaceDeCompra: this.currentItem.enlaceDeCompra,
      image: this.selectedImage ? this.selectedImage.name : 'assets/imagen_no_disponible.png' // Asigna la imagen predeterminada si no se selecciona ninguna
    };

    // Declaramos la url a la que queremos hacer un post
    const url = 'http://localhost:3000/items'; 
    this.http.post(url, body).subscribe(
      () => {
        alert('Producto agregado correctamente');

        // Redirigimos a la página principal después de agregar un item nuevo
        this.router.navigate(['/']); 
      },
      (error) => console.error('Error al guardar el producto:', error)
    );
  }

  async getNextId(): Promise<number> {
    try {
      const items = (await this.http.get<any[]>('http://localhost:3000/items').toPromise()) || [];
      return items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
    } catch (error) {
      console.error('Error al obtener el próximo ID:', error);
      return 1;
    }
  }
}
