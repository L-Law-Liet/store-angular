import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';
import {Category} from '../../../../models/category.model';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  loading = true;
  form: FormGroup;
  product: Product;
  categories: Category[];
  image: File;
  fd = new FormData();

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
        console.log(res);
      }
    );
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.service.getProduct(this.activeRoute.snapshot.paramMap.get('id')).subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.form = this.fb.group((({ name, price, sale, image, body, category_id }) => ({ name, price, sale, image, body, category_id }))(this.product));
          console.log(this.form.getRawValue());
          this.loading = false;
        }
      );
    }
    else {
      this.form = this.fb.group({
        name: '',
        price: '',
        sale: '',
        image: '',
        body: '',
        category_id: '',
      });
      console.log(this.form.getRawValue());
      this.loading = false;
    }
  }
  private addProduct() {

    this.service.addProduct(this.fd).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/product'])
      },
      error => {
        console.log(error);
        this.form.enable();
        this.form.setErrors(error.error.errors);
      }
    );
  }
  onSubmit() {
    this.form.disable();
    this.fd.append('image', this.image);
    this.fd.append('name', this.form.get('name')?.value);
    this.fd.append('price', this.form.get('price')?.value);
    this.fd.append('sale', this.form.get('sale')?.value);
    this.fd.append('body', this.form.get('body')?.value);
    this.fd.append('category_id', this.form.get('category_id')?.value);
    console.log(this.fd);
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.updateProduct();
    }
    else{
      this.addProduct();
    }
  }

  private updateProduct() {
    this.service.updateProduct(this.product.id, this.fd).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/product'])
      },
      error => {
        console.log(error);
        this.form.enable();
        this.form.setErrors(error.error.errors);
      }
    );
  }
  setImage(e: any) {
    this.image = <File>e.target.files[0];
  }

}
