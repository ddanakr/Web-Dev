import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  products: Product[] = [];

  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
