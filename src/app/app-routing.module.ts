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
import {IndexCategoryComponent} from './components/admin/category/index-category/index-category.component';
import {AddCategoryComponent} from './components/admin/category/add-category/add-category.component';
import {IndexNewsComponent} from './components/admin/news/index-news/index-news.component';
import {AddNewsComponent} from './components/admin/news/add-news/add-news.component';
import {IndexProductComponent} from './components/admin/product/index-product/index-product.component';
import {AddProductComponent} from './components/admin/product/add-product/add-product.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
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
  {
    path: 'admin',
    children: [
      {
        path: 'category',
        children: [
          {
            path: '',
            component: IndexCategoryComponent,
          },
          {
            path: 'add',
            component: AddCategoryComponent
          },
          {
            path: 'edit/:id',
            component: AddCategoryComponent
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            component: IndexNewsComponent,
          },
          {
            path: 'add',
            component: AddNewsComponent
          },
          {
            path: 'edit/:id',
            component: AddNewsComponent
          }
        ]
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: IndexProductComponent,
          },
          {
            path: 'add',
            component: AddProductComponent
          },
          {
            path: 'edit/:id',
            component: AddProductComponent
          }
        ]
      },
    ],
    canActivate: [AuthGuard, AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
