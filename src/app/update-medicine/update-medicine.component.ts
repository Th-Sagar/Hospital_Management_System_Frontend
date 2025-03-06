import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css',
})
export class UpdateMedicineComponent {
  medicine: Medicine = new Medicine();
  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  onSubmit() {}
}
