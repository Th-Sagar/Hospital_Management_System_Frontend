import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'hari1' && password === 'hari123') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
}
