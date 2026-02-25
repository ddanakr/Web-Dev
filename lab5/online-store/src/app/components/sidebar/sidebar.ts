import { Component, inject, signal, computed, output, input } from '@angular/core';
import { ProductList } from "../product-list/product-list";
import { ProductService } from '../../services/product';


@Component({
  selector: 'app-sidebar',
  imports: [],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  categories = input<any[]>([]);

  selectedId = input<number | null>(null);
  categorySelected = output<number>();

  selectCategory(id: number) {
    this.categorySelected.emit(id);
  }
  
}
