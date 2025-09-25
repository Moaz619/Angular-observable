import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createLoginForm } from '../../forms/login-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  isLogged: boolean = false;
  correctData: boolean = true;
  userData: any;
  onSubmit() {
    this.isLogged = false;
    let userEmail = localStorage.getItem('email');
    let userPass = localStorage.getItem('password');
    let submittedEmail = this.loginFormControl.value.email;
    let submittedPass = this.loginFormControl.value.password;
    if (userEmail == submittedEmail && userPass == submittedPass) {
      this.isLogged = true;
      this.userData = this.loginFormControl.value;
      this.correctData = true;
    }
    else{
      this.correctData = false;
    }
    this.loginFormControl.reset({
      email: '',
      password: '',
    });
  }
  ngOnInit(): void {
    this.loginFormControl = createLoginForm(this.loginFormBuilder);
    // console.log(this.loginFormControl.value);
  }
  loginFormBuilder = inject(FormBuilder);
  loginFormControl!: FormGroup;
  getEmail() {
    return this.loginFormControl.get('email');
  }
  getPassword() {
    return this.loginFormControl.get('password');
  }
}
