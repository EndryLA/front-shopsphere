import { Component, Input } from '@angular/core';
import { RatingDisplayComponent } from "../rating-display/rating-display.component";
import { Product } from '../../../interfaces/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RatingDisplayComponent,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product !:Product;

}
