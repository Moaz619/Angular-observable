import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createLoginForm(fb: FormBuilder): FormGroup {
  return fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}
