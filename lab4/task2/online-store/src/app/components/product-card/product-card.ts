import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product !: Product;

  shareToWhatsapp() {
    const Url = 'https://wa.me/?text=Check out this product: ' + this.product.link;
    window.open(Url, '_blank');
  }
}
