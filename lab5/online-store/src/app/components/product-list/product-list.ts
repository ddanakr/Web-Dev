import { Component, OnInit, inject, input } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  private productService = inject(ProductService);
  
  // Receive filtered list from Catalog
  products = input.required<Product[]>();

  onDeleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
