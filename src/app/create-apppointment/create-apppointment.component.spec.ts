import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApppointmentComponent } from './create-apppointment.component';

describe('CreateApppointmentComponent', () => {
  let component: CreateApppointmentComponent;
  let fixture: ComponentFixture<CreateApppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateApppointmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateApppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
