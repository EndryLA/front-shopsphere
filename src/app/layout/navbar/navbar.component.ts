import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  authService: AuthService = inject(AuthService)
  router: Router = inject(Router)

  isLogedIn :boolean = this.authService.isLogedIn();


  logout() :void {
    localStorage.removeItem("authToken")
    window.location.reload()
  }

}
