import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AddCategoryComponent} from './components/category/add-category/add-category.component';
import {IndexCategoryComponent} from './components/category/index-category/index-category.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../interceptors/auth.interceptor';
import {AuthGuard} from '../guards/auth.guard';
import {AddProductComponent} from './components/product/add-product/add-product.component';
import {IndexProductComponent} from './components/product/index-product/index-product.component';
import {IndexNewsComponent} from './components/news/index-news/index-news.component';
import {AddNewsComponent} from './components/news/add-news/add-news.component';
import {AdminGuard} from './guards/admin.guard';
import {PaginationComponent} from '../components/layouts/pagination/pagination.component';
import {ProductService} from '../services/product.service';
import {CategoryService} from './services/category.service';
import {NewsService} from './services/news.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddNewsComponent,
    IndexNewsComponent,
    IndexCategoryComponent,
    AddCategoryComponent,
    AddProductComponent,
    IndexProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AdminGuard,
    CategoryService,
    NewsService

  ],
})
export class AdminModule { }
