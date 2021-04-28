import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import {IndexCategoryComponent} from './components/category/index-category/index-category.component';
import {AddCategoryComponent} from './components/category/add-category/add-category.component';
import {IndexNewsComponent} from './components/news/index-news/index-news.component';
import {AddNewsComponent} from './components/news/add-news/add-news.component';
import {IndexProductComponent} from './components/product/index-product/index-product.component';
import {AddProductComponent} from './components/product/add-product/add-product.component';

const routes: Routes = [

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
