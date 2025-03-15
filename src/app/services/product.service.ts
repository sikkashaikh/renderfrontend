import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root' // This makes Angular automatically provide this service
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  async getProducts() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async getProductById(id: string) {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async deleteProduct(productId: number) {
    await axios.delete(`${this.apiUrl}/${productId}`);
  }

  async updateProduct(product: any) {
    await axios.put(`${this.apiUrl}/${product.id}`, product);
  }
}
