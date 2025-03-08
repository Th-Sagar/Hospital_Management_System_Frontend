import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'hari' && password === 'hari123') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
}
