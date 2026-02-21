import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-catalog',
  imports: [Sidebar, ProductList],
  standalone: true,
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

}
