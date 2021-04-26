import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsubcategoryComponent } from './showsubcategory.component';

describe('ShowsubcategoryComponent', () => {
  let component: ShowsubcategoryComponent;
  let fixture: ComponentFixture<ShowsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
