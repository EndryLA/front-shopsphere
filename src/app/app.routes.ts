import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

export const routes: Routes = [
    {path:'connexion',component:LoginComponent},
    {path:'',component:HomepageComponent},
    {path:'produit/:id', component:ProductDetailPageComponent}
];
