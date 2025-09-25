import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.css',
})
export class LoginApi {
  loginFormControlHttp!: FormGroup;
  router = inject(Router);
  constructor(private loginFormBuilderHttp: FormBuilder, private auth: Auth) {
    this.loginFormControlHttp = this.loginFormBuilderHttp.group({
      username: 'mor_2314',
      password: '83r5^_',
    });
  }
  onLoginSubmit() {
    const loginCredentials = this.loginFormControlHttp.value;
    this.auth.authLogin(loginCredentials).subscribe({
      next: () => {
        this.router.navigate(['products']);
      },
      error: (e) => {},
    });
  }
}
