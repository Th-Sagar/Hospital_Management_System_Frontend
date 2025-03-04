import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateApppointmentComponent } from './create-apppointment/create-apppointment.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
