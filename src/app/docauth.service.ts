import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocauthService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'ram' && password === 'ram123') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
  isUserloggedIn() {
    console.log('user log in');
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logout() {
    console.log('user logout');
    sessionStorage.removeItem('username');
  }
}
