import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.sass']
})
export class IndexProductComponent implements OnInit {
  // @ts-ignore
  products: Product[];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;
      }
    )
  }

}
