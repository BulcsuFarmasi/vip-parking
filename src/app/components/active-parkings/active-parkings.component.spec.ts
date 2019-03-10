import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveParkingsComponent } from './active-parkings.component';

describe('ActiveParkingsComponent', () => {
  let component: ActiveParkingsComponent;
  let fixture: ComponentFixture<ActiveParkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveParkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveParkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
