import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/components/cart-status/cart-status.component.spec.ts
import { CartStatusComponent } from './cart-status.component';

describe('CartStatusComponent', () => {
  let component: CartStatusComponent;
  let fixture: ComponentFixture<CartStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartStatusComponent ]
=======
import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ]
>>>>>>> 3c71aed (CRUD for product and design):src/app/components/products/add-product/add-product.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/components/cart-status/cart-status.component.spec.ts
    fixture = TestBed.createComponent(CartStatusComponent);
=======
    fixture = TestBed.createComponent(AddProductComponent);
>>>>>>> 3c71aed (CRUD for product and design):src/app/components/products/add-product/add-product.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
