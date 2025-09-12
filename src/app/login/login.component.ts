import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'satyam';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  count = 0;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  handleLogin(){
    this.count++;
    // if(username ==='satyam' && password === 'satyam'){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }   
  }

}
