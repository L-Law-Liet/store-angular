import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  options: string[] = [];
  search = '';
  @Input()
  id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getProductsByCategoryId();
    });
  }

  getProductsByCategoryId(): void {
    // @ts-ignore
    this.service.getProductsByCategoryId(this.id).subscribe(res => {
      this.products = res;
      this.products.sort( this.compare );
      console.log(this.products);
      this.filteredProducts = this.products;
      this.options = this.products.map(a => a.name);
      this.getProductByName(this.search);
    });
  }

  getProductByName(search: string): void {
    this.search = search;
    this.filteredProducts = this.products.filter(
      book => book.name.toLowerCase().indexOf(this.search) > -1);
  }
  compare(a: any, b: any ): number {
    if ( a.name.toLowerCase() < b.name.toLowerCase() ){
      return -1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){
      return 1;
    }
    return 0;
  }
}
