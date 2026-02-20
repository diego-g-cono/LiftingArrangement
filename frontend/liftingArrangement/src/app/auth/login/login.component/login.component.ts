import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'la-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    CommonModule,
    FormsModule     
  ]
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

login() {
  this.authService.login({
    email: this.email,
    password: this.password
  }).subscribe({
    next: () => {
      this.router.navigate(['/app']);
    },
    error: () => {
      this.error = 'Usuario o contraseña incorrectos';
    }
  });
}

}
