import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;
  constructor( ) { }

  ngOnInit(): void {
  }
  parseInt(val: any): number{
    return Number(val);
  }
}
