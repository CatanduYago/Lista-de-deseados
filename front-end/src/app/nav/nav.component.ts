// src/app/nav/nav.component.ts
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private filterService: FilterService) {} 

  ngOnInit(): void {}

  filterByType(type: string | null) {
    this.filterService.setType(type);
  }

  filterByStore(store: string | null) {
    this.filterService.setStore(store);
  }
}
