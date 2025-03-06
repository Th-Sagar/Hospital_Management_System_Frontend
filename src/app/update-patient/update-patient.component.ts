import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css',
})
export class UpdatePatientComponent {
  id: number = 0;
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe((res) => {
      this.patient = res;
    });
  }

  onSubmit() {
    this.patientService
      .updatePatient(this.id, this.patient)
      .subscribe((res) => {
        console.log(res);
        this.goToDocDash();
      });
  }

  goToDocDash() {
    this.router.navigate(['/docdash']);
  }
}
