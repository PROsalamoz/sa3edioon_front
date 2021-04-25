import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowshopComponent } from './showshop.component';

describe('ShowshopComponent', () => {
  let component: ShowshopComponent;
  let fixture: ComponentFixture<ShowshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
