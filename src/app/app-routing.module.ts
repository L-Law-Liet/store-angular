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

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cabinet',
    component: CabinetComponent
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
    component: CartComponent
  },
  {
    path: 'favourites',
    component: FavouriteComponent
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
          }
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
