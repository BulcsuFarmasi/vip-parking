import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParkingFormComponent } from './new-parking-form.component';

describe('NewParkingFormComponent', () => {
  let component: NewParkingFormComponent;
  let fixture: ComponentFixture<NewParkingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewParkingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParkingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
