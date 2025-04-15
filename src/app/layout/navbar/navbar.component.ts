import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

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
  cartService :CartService = inject(CartService)

  isLogedIn :boolean = this.authService.isLogedIn();

  get totalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  logout() :void {
    localStorage.removeItem("authToken")
    window.location.reload()
  }

}
