import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {CabinetComponent} from './components/profile/cabinet/cabinet.component';
import {NewsComponent} from './components/news/news.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {CartComponent} from './components/cart/cart.component';
import {FavouriteComponent} from './components/favourite/favourite.component';
import {AuthGuard} from './guards/auth.guard';
import {GuestGuard} from './guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'cabinet',
    component: CabinetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'category/:id',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favourites',
    component: FavouriteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
