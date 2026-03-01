import {Component} from '@angular/core';
import {Child} from './child';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
    <section>
      <app-user />
    </section>

    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }

    <div [contentEditable]="isEditable"></div>

    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>

    <app-child (addItemEvent)="addItem($event)"/>
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [User, Child],
})
export class App {
  isServerRunning = true;

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];

  isEditable = true;

  message = '';
  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
