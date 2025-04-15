import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { RatingDisplayComponent } from "../../shared/components/rating-display/rating-display.component";
import { Image } from '../../interfaces/Image';
import { ImageService } from '../../services/image.service';
import { environment } from '../../../environments/environment.development';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { ProductImageViewerComponent } from "../../shared/components/product-image-viewer/product-image-viewer.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [RatingDisplayComponent, CommonModule, ProductImageViewerComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent implements OnInit {
  product!: Product;
  productId!: number;
  productImages: Image[] = [];
  apiUrl = environment.apiUrl;
  isLoading = true;
  errorMessage: string | null = null;

  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private imageService = inject(ImageService);
  public cartService = inject(CartService)

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    
    if (isNaN(this.productId) || this.productId <= 0) {
      this.errorMessage = "Invalid product ID";
      this.router.navigate(['/products']);
      return;
    }




    // Use forkJoin to make parallel API calls
    forkJoin({
      product: this.productService.getProductById(this.productId).pipe(
        catchError(error => {
          console.error('Error fetching product:', error);
          this.errorMessage = "Failed to load product details";
          return of(null);
        })
      ),
      images: this.imageService.getProductImages(this.productId).pipe(
        catchError(error => {
          console.error('Error fetching product images:', error);
          return of([]);
        })
      )
    }).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (result) => {
        if (result.product) {
          this.product = result.product;
          this.productImages = result.images;
        } else {
          this.errorMessage = "Product not found";
          this.router.navigate(['/products']);
        }
      }
    });
  }

}