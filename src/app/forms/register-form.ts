import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export function createRegisterationForm(fb: FormBuilder): FormGroup {
  return fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      phones: fb.array([
        fb.control('', [Validators.required,egyptianPhoneValidator]),
      ]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validators: confirmPasswordValidator }
  );
}

export function egyptianPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const regex = /^01[012][0-9]{8}$/;
  const valid = regex.test(control.value);
  return valid ? null : { invalidEgyptianPhone: true };
}

export function confirmPasswordValidator(formGroup: AbstractControl): ValidationErrors | null {
  //   const regex = /^01[012][0-9]{8}$/;
  const pass = formGroup.get('password')?.value;
  const confirmPass = formGroup.get('confirmPassword')?.value;
  //   console.log(pass, confirmPass);
  return pass === confirmPass ? null : { noMatch: true };
}
