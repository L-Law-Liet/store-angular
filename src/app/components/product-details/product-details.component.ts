import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../models/cart.model';
import {UserService} from '../../services/user.service';
import {audit} from 'rxjs/operators';
import {FavouriteService} from '../../services/favourite.service';
import {Favourite} from '../../models/favourite.model';
import {FeedbackService} from '../../services/feedback.service';
import {Feedback} from '../../models/feedback.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  id: string | undefined;
  // @ts-ignore
  cart: Cart;
  // @ts-ignore
  favourite: Favourite;
  // @ts-ignore
  product: Product;
  count = 1;
  loading = true;
  canComment = false;
  feedbacks: Feedback[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService,
    private cartService: CartService,
    private favouriteService: FavouriteService,
    private feedbackService: FeedbackService,
    public auth: UserService,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(): void{
    // @ts-ignore
    this.service.getProduct(this.id).subscribe(res => {
      this.product = res;
      this.getFeedbacks(this.product.id);
      if (this.auth.user){
        this.getCart(this.product.id);
        this.getFavourites(this.product.id);
        this.hasAccess();
      }
      console.log(res);
    });
  }

  addToCart(){
    let req = new FormData();
    // @ts-ignore
    req.append('product_id', this.product.id);
    // @ts-ignore
    req.append('count', this.count);

    this.cartService.addToCart(req).subscribe(
      res => {
        this.getCart(this.product.id);
        this.count = 1;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  favourites(): void{
    if (this.favourite){
      this.favouriteService.removeFromFavourites(this.product.id).subscribe(
        res => {
          this.getFavourites(this.product.id);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      let req = new FormData();
      // @ts-ignore
      req.append('product_id', this.product.id);

      this.favouriteService.addToFavourites(req).subscribe(
        res => {
          this.getFavourites(this.product.id);
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 1) {
      this.count--;
    }
  }
  parseInt(val: any): number{
    return Number(val);
  }
  getCart(id: number): void{
    this.cartService.contains(id).subscribe(
      res => {
        console.log(res);
        this.cart = res;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
  getFavourites(id: number): void{
    this.favouriteService.contains(id).subscribe(
      res => {
        console.log(res);
        this.favourite = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  getFeedbacks(id: number): void{
    this.feedbackService.getFeedbacks(id).subscribe(
      res => {
        console.log(res);
        this.feedbacks = res;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
  hasAccess(): void{
    this.feedbackService.hasAccess(this.auth.user.id, this.product.id).subscribe(
      res => {
        console.log(res);
        this.canComment = res;
        console.log(this.canComment);
      }
    );
  }
  updateFeedback(){
    this.getFeedbacks(this.product.id);
    this.hasAccess();
  }
}
