import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css',
})
export class UpdatePatientComponent {
  patient: Patient = new Patient();

  constructor(private patientService: PatientService) {}

  onSubmit() {}
}
