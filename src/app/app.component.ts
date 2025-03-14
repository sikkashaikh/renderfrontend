import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/add">Add Product</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background: #333;
      padding: 10px;
    }
    nav a {
      color: white;
      margin-right: 10px;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
