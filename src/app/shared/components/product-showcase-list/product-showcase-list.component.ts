import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../product-card-skeleton/product-card-skeleton.component';
import { register } from 'swiper/element';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-showcase-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    ProductCardSkeletonComponent,
  ],
  templateUrl: './product-showcase-list.component.html',
  styleUrl: './product-showcase-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductShowcaseListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productService: ProductService = inject(ProductService);
  @Input({ required: true }) title!: string;
  isLoading: boolean = true;
  
  // For handling swiper navigation
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  
  // To store subscription for cleanup
  private subscription?: Subscription;
  
  // For showing skeletons during loading
  skeletonArray = Array(4).fill(0);

  ngOnInit(): void {
    // Register Swiper custom elements
    register();
    
    // Fetch products with proper loading handling
    this.subscription = this.productService.getProducts().subscribe({
      next: (response) => {
        // Only set isLoading to false when we get a valid response with content
        if (response && response.content && response.content.length > 0) {
          this.products = response.content;
          this.isLoading = false;
        } else {
          // If we get an empty response, we might want to retry or keep loading
          console.log('Received empty product list, keeping loading state');
          // Optionally, you could implement a retry mechanism here
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        // You might choose to keep isLoading true here and implement a retry
        // Or display an error state instead of the loading state
        
        // If you want to show an error state instead of perpetual loading:
        // this.isLoading = false;
        // this.hasError = true; // You'd need to add this property and handle it in the template
      }
    });
  }
  
  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  // Methods to handle swiper navigation
  slidePrev(): void {
    const swiper = this.swiperContainer?.nativeElement;
    if (swiper) {
      swiper.swiper.slidePrev();
    }
  }
  
  slideNext(): void {
    const swiper = this.swiperContainer?.nativeElement;
    if (swiper) {
      swiper.swiper.slideNext();
    }
  }
}