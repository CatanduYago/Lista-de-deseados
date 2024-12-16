import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() types!: string[];
  @Input() stores!: string[];
  @Output() typeSelected = new EventEmitter<string | null>();
  @Output() storeSelected = new EventEmitter<string | null>();

  selectedType: string | undefined = undefined; // Cambia a string | undefined
  selectedStore: string | undefined = undefined; // Cambia a string | undefined

  // Método para seleccionar o deseleccionar un tipo
  onTypeSelect(type: string | null) {
    this.typeSelected.emit(type);
  }

  // Método para seleccionar o deseleccionar una tienda
  onStoreSelect(store: string | null) {
    this.storeSelected.emit(store);
  }
  toggleType(type: string) {
    this.selectedType = type === this.selectedType ? undefined : type;
    this.typeSelected.emit(this.selectedType);
  }

  toggleStore(store: string) {
    this.selectedStore = store === this.selectedStore ? undefined : store;
    this.storeSelected.emit(this.selectedStore);
  }

  clearType(event: MouseEvent) {
    event.stopPropagation();
    this.selectedType = undefined;
    this.typeSelected.emit(this.selectedType);
  }

  clearStore(event: MouseEvent) {
    event.stopPropagation();
    this.selectedStore = undefined;
    this.storeSelected.emit(this.selectedStore);
  }
}
