import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CabinetComponent } from './components/profile/cabinet/cabinet.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FilterComponent } from './components/filter/filter.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddNewsComponent } from './components/admin/news/add-news/add-news.component';
import { IndexNewsComponent } from './components/admin/news/index-news/index-news.component';
import { IndexCategoryComponent } from './components/admin/category/index-category/index-category.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { IndexProductComponent } from './components/admin/product/index-product/index-product.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CabinetComponent,
    NewsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    FeedbackComponent,
    FilterComponent,
    CartComponent,
    FavouriteComponent,
    SliderComponent,
    AddNewsComponent,
    IndexNewsComponent,
    IndexCategoryComponent,
    AddCategoryComponent,
    AddProductComponent,
    IndexProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
