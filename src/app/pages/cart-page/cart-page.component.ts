import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DecimalPipe } from '@angular/common';
import { CartItem } from '../../interfaces/CartItem';
import { environment } from '../../../environments/environment';
import { ProductShowcaseListComponent } from '../../shared/components/product-showcase-list/product-showcase-list.component';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    DecimalPipe,
    ProductShowcaseListComponent,
    ProductCardComponent,
    RouterLink
],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit{


  public cartService :CartService = inject(CartService)
  cartItems !: CartItem[];
  apiUrl = environment.apiUrl

  get cartPrice() :number {
    return this.cartService.getTotalPrice();
  }

  ngOnInit(): void {
      this.cartItems = this.cartService.cartItems;
  }

  
  

}
