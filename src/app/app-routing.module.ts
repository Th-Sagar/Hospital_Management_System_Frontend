import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateApppointmentComponent } from './create-apppointment/create-apppointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashboardComponent,
  },
  {
    path: 'appointmentlist',
    component: AppointmentComponent,
  },
  {
    path: 'create-appointment',
    component: CreateApppointmentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
  },
  {
    path: 'create-medicine',
    component: CreateMedicineComponent,
  },
  {
    path: 'view-medicine',
    component: MedicinelistComponent,
  },
  {
    path: 'docdash',
    component: DocdashComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
