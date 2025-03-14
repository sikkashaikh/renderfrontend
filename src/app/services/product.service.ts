import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root' // This makes Angular automatically provide this service
})
export class ProductService {
  private apiUrl = 'https://renderbackend-jg46.onrender.com/products'; // Server
  //private apiUrl = 'http://localhost:5000/products'; //Local

  async getProducts() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async deleteProduct(productId: number) {
    await axios.delete(`${this.apiUrl}/${productId}`);
  }

  async updateProduct(product: any) {
    await axios.put(`${this.apiUrl}/${product.id}`, product);
  }
}
