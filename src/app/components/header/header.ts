import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLogged: boolean = false;
  router = inject(Router)

  logIn(buttonPressed: string) {
    this.isLogged = true;
    // console.log(typeof buttonPressed);
    if(buttonPressed == 'login') 
      this.router.navigate(['/login']);
    else
      this.router.navigate(['/register']);
  }
  logOut() {
    this.isLogged = false;
    this.router.navigate(['/home']);
  }
}
