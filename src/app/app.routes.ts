import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './shared/components/homepage/homepage.component';

export const routes: Routes = [
    {path:'connexion',component:LoginComponent},
    {path:'',component:HomepageComponent}
];
