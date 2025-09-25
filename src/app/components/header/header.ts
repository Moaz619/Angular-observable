import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router);
  auth = inject(Auth);

  isLogged: boolean = this.auth.isLoggedIn();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  logIn(buttonPressed: string) {
    if (buttonPressed == 'login') this.router.navigate(['/login-api']);
    else this.router.navigate(['/register']);
  }
  logOut() {
    // this.isLogged = false;
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
