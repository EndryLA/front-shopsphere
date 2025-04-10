import { Component, Input } from '@angular/core';
import { RatingDisplayComponent } from "../rating-display/rating-display.component";
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingDisplayComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product !:Product;

}
