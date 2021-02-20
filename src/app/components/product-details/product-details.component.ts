import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  count = 1;
  constructor() { }

  ngOnInit(): void {
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
