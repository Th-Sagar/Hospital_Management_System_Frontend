import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindashboard',
  standalone: false,
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css',
})
export class AdmindashboardComponent {
  patients: Patient[] = [];
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe((res) => {
      this.patients = res;
    });
  }
}
