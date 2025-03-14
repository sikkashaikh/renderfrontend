import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root' // This makes Angular automatically provide this service
})
export class ProductService {
  private apiUrl = 'https://renderbackend-jg46.onrender.com/products';

  async getProducts() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}
