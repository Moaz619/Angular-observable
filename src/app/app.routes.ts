import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

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
  },
  { path: 'products/:id', component: ProductDetails, title: 'product display page' },
  { path: 'cart', component: ShoppingCart, title: 'Cart page' },
  { path: 'login', component: Login, title: 'login page' },
  { path: 'register', component: Register, title: 'register page' },
  { path: '**', component: NotFound, title: 'Not found page' },
];
