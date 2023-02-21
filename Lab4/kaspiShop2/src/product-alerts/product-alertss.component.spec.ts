import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertssComponent } from './product-alertss.component';

describe('ProductAlertssComponent', () => {
  let component: ProductAlertssComponent;
  let fixture: ComponentFixture<ProductAlertssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlertssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
