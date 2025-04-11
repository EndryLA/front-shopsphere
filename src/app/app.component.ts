import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { ProductCardComponent } from "./shared/components/product-card/product-card.component";
import { Product } from './interfaces/Product';
import { ProductService } from './services/products.service';
import { ProductShowcaseListComponent } from "./shared/components/product-showcase-list/product-showcase-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductShowcaseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  products !: Product[]
  productService: ProductService = inject(ProductService)

  ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next:(response) => {
          this.products = response.content
          console.log(response.content)
        },
        error:(error) => console.log(error)
      })
  }

}
