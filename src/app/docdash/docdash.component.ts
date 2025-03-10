import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css',
})
export class DocdashComponent {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private docAuth: DocauthService
  ) {}

  patients: Patient[] = [];

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe((res) => {
      this.patients = res;
      console.log(res);
    });
  }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((res) => {
      console.log(res);
      this.getPatients();
    });
  }

  update(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  view(id: number) {
    this.router.navigate(['/view-patient', id]);
  }
  logout() {
    this.docAuth.logout();
    this.router.navigate(['home']);
  }
}
