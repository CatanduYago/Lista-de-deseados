import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private typeSource = new BehaviorSubject<string | null>(null);
  private storeSource = new BehaviorSubject<string | null>(null);

  type$ = this.typeSource.asObservable();
  store$ = this.storeSource.asObservable();

  setType(type: string | null) {
    this.typeSource.next(type);
  }

  setStore(store: string | null) {
    this.storeSource.next(store);
  }
}
