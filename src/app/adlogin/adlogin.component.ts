import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css',
})
export class AdloginComponent {
  username: string = '';
  password: string = '';

  isValidLogin = false;

  constructor(
    private router: Router,
    private adminAuthService: AdminauthService
  ) {}
  checkLogin() {
    if (this.adminAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.isValidLogin = false;
    } else {
      this.isValidLogin = true;
      alert('Wrong credinitals');
      this.router.navigate(['home']);
    }
  }
}
