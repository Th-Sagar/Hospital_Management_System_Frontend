import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

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

  constructor(private router: Router, private docAuthService: DocauthService) {}
  checkLogin() {
    if (this.docAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.isValidLogin = false;
    } else {
      this.isValidLogin = true;
      alert('Wrong credinitals');
      this.router.navigate(['home']);
    }
  }
}
