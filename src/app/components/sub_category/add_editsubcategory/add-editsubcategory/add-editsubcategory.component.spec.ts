import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditsubcategoryComponent } from './add-editsubcategory.component';

describe('AddEditsubcategoryComponent', () => {
  let component: AddEditsubcategoryComponent;
  let fixture: ComponentFixture<AddEditsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditsubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
