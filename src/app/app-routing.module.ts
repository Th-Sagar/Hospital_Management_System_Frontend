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
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminauthguardService],
  },
  {
    path: 'appointmentlist',
    component: AppointmentComponent,
    canActivate: [AdminauthguardService],
  },
  {
    path: 'adlogin',
    component: AdloginComponent,
  },
  {
    path: 'doclogin',
    component: DocloginComponent,
  },
  {
    path: 'create-appointment',
    component: CreateApppointmentComponent,
    canActivate: [AdminauthguardService],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'create-medicine',
    component: CreateMedicineComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'view-medicine',
    component: MedicinelistComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'view-patient/:id',
    component: ViewPatientComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'update-medicine/:id',
    component: UpdateMedicineComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'update-patient/:id',
    component: UpdatePatientComponent,
    canActivate: [DoctorauthguardService],
  },
  {
    path: 'docdash',
    component: DocdashComponent,
    canActivate: [DoctorauthguardService],
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
