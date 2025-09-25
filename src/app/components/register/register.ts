import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createRegisterationForm, egyptianPhoneValidator } from '../../forms/register-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerFormControls!: FormGroup;

  registerFormBuilder: FormBuilder = inject(FormBuilder);
  phonesArray!: FormArray;

  userData: any;
  isRegistered: boolean = false;

  ngOnInit(): void {
    this.registerFormControls = createRegisterationForm(this.registerFormBuilder);
    this.phonesArray = this.getPhone();
    // console.log(this.phonesArray);
  }

  submitForm() {
    this.isRegistered = false;
    localStorage.setItem('email', this.registerFormControls.value.email);
    localStorage.setItem('password', this.registerFormControls.value.password);
    this.userData = this.registerFormControls.value;
    // console.log(this.userData.name);
    this.registerFormControls.reset({
      name: '',
      email: '',
      phones: [''],
      password: '',
      confirmPassword: '',
    });
    this.isRegistered = true;
  }
  getName() {
    return this.registerFormControls.get('name');
  }
  getEmail() {
    return this.registerFormControls.get('email');
  }
  getPhone() {
    return this.registerFormControls.get('phones') as FormArray;
  }
  getPassword() {
    return this.registerFormControls.get('password');
  }
  getConfirmPassword() {
    return this.registerFormControls.get('confirmPassword');
  }

  removePhone(index: number) {
    this.phonesArray.removeAt(index);
  }
  addPhone() {
    // console.log(this.registerFormControls.value)
    this.phonesArray.push(
      this.registerFormBuilder.control('', [Validators.required, egyptianPhoneValidator])
    );
    // console.log(this.registerFormControls.value)
  }
  getPhoneDisplay() {
    // console.log(this.userData['phones']);
    return this.userData ? this.userData['phones'] : '';
  }
}
