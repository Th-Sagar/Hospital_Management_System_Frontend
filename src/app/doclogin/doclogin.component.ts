import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doclogin',
  standalone: false,
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css',
})
export class DocloginComponent {
  username: string = '';
  password: string = '';

  isValidLogin = false;

  constructor(private router: Router) {}
  checkLogin() {
    if (this.username == 'ram' && this.password == 'ram123') {
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['docdash']);
      return true;
    } else {
      alert('Wrong credinitals');
      this.router.navigate(['home']);
      return false;
    }
  }
}
