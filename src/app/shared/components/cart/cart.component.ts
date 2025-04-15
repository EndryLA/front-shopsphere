import { Component } from '@angular/core';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


  cartProducts :Product[] = []
  

}
