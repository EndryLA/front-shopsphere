import { Component, inject, OnInit } from '@angular/core';
import { ProductShowcaseListComponent } from "../../shared/components/product-showcase-list/product-showcase-list.component";
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/products.service';
import { ProductCardSkeletonComponent } from "../../shared/components/product-card-skeleton/product-card-skeleton.component";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ProductShowcaseListComponent,
    NgClass
    ],
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

  faqItems: any[] = [
    {
      question: 'Quelle est votre politique de retour ?',
      answer: "Vous disposez de 14 jours après réception de votre commande pour nous retourner un produit non déballé dans son emballage d'origine. Pour les produits déballés mais non utilisés, des frais de reconditionnement de 10% peuvent s'appliquer.",
      isExpanded: false
    },
    {
      question: 'Les frais de livraison sont-ils gratuits ?',
      answer: 'La livraison est offerte pour toute commande supérieure à 49€. En dessous de ce montant, les frais varient selon le mode de livraison choisi.',
      isExpanded: false
    },
    {
      question: 'Comment suivre ma commande ?',
      answer: 'Dès l\'expédition de votre commande, vous recevrez un email avec un numéro de suivi vous permettant de suivre votre colis en temps réel.',
      isExpanded: false
    }
  ];

  toggleFaq(item: any): void {
    item.isExpanded = !item.isExpanded;
  }

  ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next:(response) => {
          this.products = response.content
        },
        error:(error) => console.log(error)
      })
  }

}
