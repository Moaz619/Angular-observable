import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { LoginApi } from './components/login-api/login-api';
import { authGuard } from './guards/auth-guard';
import { navbarGuard } from './guards/navbar-guard';
import { SearchHttp } from './components/search-http/search-http';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home page' },
  { path: 'about-us', component: AboutUs, title: 'About page' },
  { path: 'contact-us', component: ContactUs, title: 'Contact page' },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-filter/product-filter').then((prd) => prd.ProductFilter),
    title: 'Products page',
    canActivate: [authGuard],
  },
  { path: 'products/:id', component: ProductDetails, title: 'product display page' },
  { path: 'cart', component: ShoppingCart, title: 'Cart page' },
  // { path: 'login', component: Login, title: 'login page' },
  { path: 'login-api', component: LoginApi, title: 'http login page' ,canActivate: [navbarGuard]},
  { path: 'register', component: Register, title: 'register page' },
  { path: 'search-http', component: SearchHttp, title: 'search page' },
  { path: '**', component: NotFound, title: 'Not found page' },
];
