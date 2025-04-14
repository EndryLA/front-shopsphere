import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Image} from '../../../interfaces/Image'
import { ImageService } from '../../../services/image.service';
import { environment } from '../../../../environments/environment.development';
import { register } from 'swiper/element';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-image-viewer',
  standalone: true,
  imports: [],
  templateUrl: './product-image-viewer.component.html',
  styleUrl: './product-image-viewer.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductImageViewerComponent implements OnInit, OnDestroy {

  images : Image[] = []
  @Input({required:true}) productId !:number;
  apiUrl :String = environment.apiUrl
  activeImage !:number 


  imageService :ImageService = inject(ImageService)
  private subscription?: Subscription;



  @ViewChild('swiperContainer') swiperContainer!: ElementRef;


  ngOnInit(): void {

    register()
     this.subscription = this.imageService.getProductImages(this.productId).subscribe({
        next: (response) => {
          this.images = response
          this.activeImage = this.images[0].id;
        }
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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





  setActiveImage(imageId :number) {
    this.activeImage = imageId;
  }

}
