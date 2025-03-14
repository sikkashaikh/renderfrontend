import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    this.products = await this.productService.getProducts();
  }

  async deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      await this.productService.deleteProduct(productId);
      this.loadProducts(); // Reload the list after deletion
    }
  }

  editProduct(product: any) {
    product.editing = true; // Enable edit mode
  }

  async updateProduct(product: any) {
    product.editing = false; // Exit edit mode
    await this.productService.updateProduct(product);
    this.loadProducts();
  }

  cancelEdit(product: any) {
    product.editing = false; // Exit edit mode without saving
    this.loadProducts();
  }
}
