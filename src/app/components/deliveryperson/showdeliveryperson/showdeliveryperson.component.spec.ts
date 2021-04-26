import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdeliverypersonComponent } from './showdeliveryperson.component';

describe('ShowdeliverypersonComponent', () => {
  let component: ShowdeliverypersonComponent;
  let fixture: ComponentFixture<ShowdeliverypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdeliverypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdeliverypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
