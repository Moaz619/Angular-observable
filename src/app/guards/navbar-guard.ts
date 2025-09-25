import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

//guards loggedIn users from accessing auth/login
export const navbarGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
