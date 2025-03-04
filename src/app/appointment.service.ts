import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:9090/api/v2';

  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }
}
