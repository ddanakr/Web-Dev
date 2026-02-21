import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Catalog } from "./components/catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
