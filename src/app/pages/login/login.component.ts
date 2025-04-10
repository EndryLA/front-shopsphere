import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  formData!:FormGroup
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  errors: string[] = [];
  isLoading :boolean = false;

  

  ngOnInit(): void {

      this.formData = this.formBuilder.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required]]
    })
  }


  login() :void {

    this.errors = [];

    if (this.formData.valid && this.formData.value !== null) {

      this.isLoading = true;

      this.authService.login(this.formData.value).subscribe({
        next: (response) => {
          localStorage.setItem("authToken",response.token);
          this.isLoading = false;
          this.router.navigate(['']).then(() => {window.location.reload()})
        },
        error: (error) => {
          this.errors.push('Adresse mail ou mot de passe incorrect')
          this.isLoading = false;
        }
      })

    } else {
        this.errors.push('Adresse mail ou mot de passe incorrect')
    }

  }


}
