import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  id: string | undefined;
  // @ts-ignore
  product: Product;
  count = 1;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService
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
      console.log(res);
    });
  }

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    if (this.count > 1) {
      this.count--;
    }
  }
}
