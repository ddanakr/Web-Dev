import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  remove = output<number>();

  like() {
    if(this.isLiked()){
      this.product().likes -= 1;
      return;
    }
    this.product().likes += 1;
  }

  isLiked(): boolean {
    return this.product().likes > 0;
  }

  shareToWhatsapp() {
    const Url = 'https://wa.me/?text=Check out this product: ' + this.product().link;
    window.open(Url, '_blank');
  }
}
