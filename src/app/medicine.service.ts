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
}
