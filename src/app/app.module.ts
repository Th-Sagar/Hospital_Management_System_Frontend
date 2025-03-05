import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateApppointmentComponent } from './create-apppointment/create-apppointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    AppointmentComponent,
    CreateApppointmentComponent,
    HomeComponent,
    DocdashComponent,
    CreatePatientComponent,
    MedicinelistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
