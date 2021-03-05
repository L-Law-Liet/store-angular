import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }


}
