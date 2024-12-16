import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent implements OnInit {
  itemId!: number;
  item = {
    id: 0,
    name: '',
    price: 0,
    type: '',
    store: '',
    image: '',
    nivelDeDeseo: '',
    enlaceDeCompra: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(`http://localhost:3000/items/${this.itemId}`).subscribe(
      (data: any) => {
        this.item = data;
      },
      error => {
        console.error('Error al cargar el ítem:', error);
      }
    );
  }

  onSubmit() {
    this.http.put(`http://localhost:3000/items/${this.item.id}`, this.item).subscribe(
      () => {
        alert('Ítem actualizado exitosamente');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al actualizar el ítem:', error);
      }
    );
  }
}
