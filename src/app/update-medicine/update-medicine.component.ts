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

  id: number = 0;

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe((res) => {
      this.medicine = res;
    });
  }

  onSubmit() {
    this.medicineService
      .updateMedicine(this.id, this.medicine)
      .subscribe((res) => {
        console.log(res);
        this.goToMedicineList();
      });
  }

  goToMedicineList() {
    this.router.navigate(['/view-medicine']);
  }
}
