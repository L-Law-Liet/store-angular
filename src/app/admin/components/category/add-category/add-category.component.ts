import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../../models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {
  loading = true;
  form: FormGroup
  category: Category;

  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.service.getCategory(this.activeRoute.snapshot.paramMap.get('id')).subscribe(
        res => {
          console.log(res);
          this.category = res;
          this.form = this.fb.group({
            name: this.category.name
          });
          this.loading = false;
        }
      );
    }
    else{
      this.form = this.fb.group({
        name: ''
      });
      this.loading = false;
    }
  }

  private addCategory() {
    this.service.addCategory(this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        this.service.updateCategories();
        this.router.navigate(['/admin/category'])
      },
      error => {
        this.form.enable();
        this.form.setErrors(error.error.errors);
      }
    );
  }
  onSubmit() {
    this.form.disable();
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.updateCategory();
    }
    else{
      this.addCategory();
    }
  }

  private updateCategory() {
    this.service.updateCategory(this.category.id, this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        this.service.updateCategories();
        this.router.navigate(['/admin/category'])
      },
      error => {
        this.form.enable();
        this.form.setErrors(error.error.errors);
      }
    );
  }
}
