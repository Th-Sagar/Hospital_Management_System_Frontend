import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: false,
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css',
})
export class AdmindashboardComponent {
  patients: Patient[] = [];
  constructor(
    private patientService: PatientService,
    private adminauthService: AdminauthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe((res) => {
      this.patients = res;
    });
  }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((res) => {
      console.log(res);
      this.getPatients();
    });
  }
  logout() {
    this.adminauthService.logout();
    this.router.navigate(['home']);
  }
}
