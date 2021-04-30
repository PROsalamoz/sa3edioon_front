import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForShopComponent } from './search-for-shop.component';

describe('SearchForShopComponent', () => {
  let component: SearchForShopComponent;
  let fixture: ComponentFixture<SearchForShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
