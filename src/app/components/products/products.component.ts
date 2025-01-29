import { Component } from '@angular/core';
import { Product } from '../../../types';
import { ProductServiceService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductServiceService){}


  fetchProducts(){
    this.productsService.getData()
      .subscribe({
        next:(data:Product[]) => {
          this.products = data
        }
      });
        
  }

  ngOnInit() {
    this.fetchProducts();
  }

}
