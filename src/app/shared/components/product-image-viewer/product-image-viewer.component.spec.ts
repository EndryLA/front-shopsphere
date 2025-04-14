import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageViewerComponent } from './product-image-viewer.component';

describe('ProductImageViewerComponent', () => {
  let component: ProductImageViewerComponent;
  let fixture: ComponentFixture<ProductImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
