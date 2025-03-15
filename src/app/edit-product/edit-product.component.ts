import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements OnInit {
  product: any = {};

  constructor(
    public route: ActivatedRoute,
    public productService: ProductService,
    public router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || ''; 
    this.product = await this.productService.getProductById(id);
  }

  async updateProduct() {
    await this.productService.updateProduct(this.product);
    alert('Product updated successfully!');
    this.router.navigate(['/']); // Redirect to product list
  }
}
