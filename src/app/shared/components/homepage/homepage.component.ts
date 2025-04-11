import { Component, inject, OnInit } from '@angular/core';
import { ProductShowcaseListComponent } from "../product-showcase-list/product-showcase-list.component";
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductShowcaseListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  products !: Product[]
  productService: ProductService = inject(ProductService)

  imagesObject: any[] = [
    {filename:'home-ordinateur-portable.png',title:'Ordinateur Portable'},
    {filename:'home-tablette.png',title:'Tablette'},
    {filename:'home-appareil-photo.png',title:'Appareil photo'},
    {filename:'home-console.png',title:'Console de jeux '},
    {filename:'home-iphone.png',title:'Iphone'},
    {filename:'home-montre-connectée.png',title:'Montre connectée'},
    {filename:'home-casque-audio.png',title:'Casque Audio'},
    {filename:'home-pc.png',title:'PC de bureau'},
    
  ] 

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
