import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { register } from 'swiper/element';

@Component({
  selector: 'app-product-showcase-list',
  standalone: true,
  imports: [
    ProductCardComponent,
],
  templateUrl: './product-showcase-list.component.html',
  styleUrl: './product-showcase-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProductShowcaseListComponent implements OnInit{

  
  products!: Product[]
  productService :ProductService = inject(ProductService)


  ngOnInit() :void {

    register()

    this.productService.getProducts().subscribe({
      next:(response) => {
        this.products = response.content;
      }
    })

  }



}
