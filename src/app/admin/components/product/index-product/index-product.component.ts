import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';
import {Paginator} from '../../../../models/paginator.model';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.sass']
})
export class IndexProductComponent implements OnInit {
  // @ts-ignore
  products: Product[];
  // @ts-ignore
  paginator: Paginator;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProductsPageable()
  }
  getProductsPageable(page?: any): void {
    console.log(page);
    this.service.getProductsPageable(page).subscribe( res => {
      console.log(res);
      this.products = res.data;
      this.paginator = new Paginator(res.current_page, res.from, res.last_page, res.next_page_url,
        res.prev_page_url, res.to, res.total, res.links);
    });
  }
  changePage(page: any): void {
    this.getProductsPageable(page);
  }

}
