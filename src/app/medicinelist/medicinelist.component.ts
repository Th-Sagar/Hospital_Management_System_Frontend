import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css',
})
export class MedicinelistComponent {
  medicines: Medicine[] = [];
  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {
    this.medicineService.getMedicine().subscribe((res) => {
      console.log(res);
      this.medicines = res;
    });
  }

  delete(id: number) {}

  update(id: number) {
    this.router.navigate(['update-medicine', id]);
  }
}
