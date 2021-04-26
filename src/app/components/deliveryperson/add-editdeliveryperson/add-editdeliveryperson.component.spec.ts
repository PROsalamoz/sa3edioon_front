import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditdeliverypersonComponent } from './add-editdeliveryperson.component';

describe('AddEditdeliverypersonComponent', () => {
  let component: AddEditdeliverypersonComponent;
  let fixture: ComponentFixture<AddEditdeliverypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditdeliverypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditdeliverypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
