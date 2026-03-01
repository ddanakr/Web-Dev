import { Component, inject, signal, computed } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { ProductList } from "../product-list/product-list";
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-catalog',
  imports: [Sidebar, ProductList],
  standalone: true,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  private productService = inject(ProductService);

  categories = this.productService.categories;
  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const catgId = this.selectedCategoryId();
    const allProducts = this.productService.getProducts()();

    if(catgId === null) return [];

    return allProducts.filter(p => p.categoryId == catgId);

    
  })

  selectCategory(id: number) {
    console.log('Selected category ID:', id);
    this.selectedCategoryId.set(id);
  }
}
