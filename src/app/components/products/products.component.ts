import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {SalePipe} from '../../pipes/sale.pipe';
import {LogService} from '../../services/log.service';

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
      console.log(this.products)
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

  sortProducts(option: string){
    switch (option){
      case 'az':
        // @ts-ignore
        this.filteredProducts.sort(this.compareByNameAz)
        break;
      case 'za':
        // @ts-ignore
        this.filteredProducts.sort(this.compareByNameZa)
        break;
      case 'ascPrice':
        // @ts-ignore
        this.filteredProducts.sort(this.compareByAscPrice)
        break;
      case 'descPrice':
        // @ts-ignore
        this.filteredProducts.sort(this.compareByDescPrice)
        break;
    }
  }

  compareByNameAz(a: Product, b: Product ): number {
    if ( a.name.toLowerCase() < b.name.toLowerCase() ){
      return -1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){
      return 1;
    }
    return 0;
  }
  compareByNameZa(a: Product, b: Product ): number {
    if ( a.name.toLowerCase() < b.name.toLowerCase() ){
      return 1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){
      return -1;
    }
    return 0;
  }
  compareByAscPrice(a: Product, b: Product ): number {
    if ( new SalePipe().transform(a.price, a.sale)  < new SalePipe().transform(b.price, b.sale) ){
      return -1;
    }
    if ( new SalePipe().transform(a.price, a.sale)  > new SalePipe().transform(b.price, b.sale) ){
      return 1;
    }
    return 0;
  }
  compareByDescPrice(a: Product, b: Product ): number {
    if ( new SalePipe().transform(a.price, a.sale)  < new SalePipe().transform(b.price, b.sale) ){
      return 1;
    }
    if ( new SalePipe().transform(a.price, a.sale)  > new SalePipe().transform(b.price, b.sale) ){
      return -1;
    }
    return 0;
  }
}
