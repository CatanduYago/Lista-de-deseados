import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  @Input() title: string = 'Confirmar acción';
  @Input() message: string = '¿Estas seguro de que quieres borrar este articulo?';
  @Output() confirmed = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
  }
}
