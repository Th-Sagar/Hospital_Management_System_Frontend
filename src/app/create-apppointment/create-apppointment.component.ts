import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-apppointment',
  standalone: false,
  templateUrl: './create-apppointment.component.html',
  styleUrl: './create-apppointment.component.css',
})
export class CreateApppointmentComponent {
  appointment: Appointment = new Appointment();

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  saveAppointment() {
    this.appointmentService
      .createAppointment(this.appointment)
      .subscribe((res) => {
        console.log(res);
        this.goToAppointment();
      });
  }

  onSubmit() {
    this.saveAppointment();
  }

  goToAppointment() {
    this.router.navigate(['/appointmentlist']);
  }
}
