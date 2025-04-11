import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowcaseListComponent } from './product-showcase-list.component';

describe('ProductShowcaseListComponent', () => {
  let component: ProductShowcaseListComponent;
  let fixture: ComponentFixture<ProductShowcaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShowcaseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
