import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcategoryComponent } from './add-editcategory.component';

describe('AddEditcategoryComponent', () => {
  let component: AddEditcategoryComponent;
  let fixture: ComponentFixture<AddEditcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
