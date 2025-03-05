import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css',
})
export class CreateMedicineComponent {
  medicine: Medicine = new Medicine();
  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe((res) => {
      console.log(res);
      this.goToViewMedicine();
    });
  }

  onSubmit() {
    this.saveMedicine();
  }

  goToViewMedicine() {
    this.router.navigate(['/view-medicine']);
  }
}
