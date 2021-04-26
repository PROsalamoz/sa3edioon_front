import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditshopComponent } from './add-editshop.component';

describe('AddEditshopComponent', () => {
  let component: AddEditshopComponent;
  let fixture: ComponentFixture<AddEditshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
