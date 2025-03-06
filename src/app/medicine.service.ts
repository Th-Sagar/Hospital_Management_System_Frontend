import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  baseUrl: string = 'http://localhost:9090/api/v3';

  constructor(private httpClient: HttpClient) {}

  getMedicine(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`, medicine);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/medicines/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<object> {
    return this.httpClient.put<Medicine>(
      `${this.baseUrl}/medicines/${id}`,
      medicine
    );
  }

  deleteMedicine(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/medicines/${id}`);
  }
}
