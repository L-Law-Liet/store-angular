import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/category.model';

@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html',
  styleUrls: ['./index-category.component.sass']
})
export class IndexCategoryComponent implements OnInit {
  // @ts-ignore
  categories: Category[];

  constructor(public service: CategoryService) { }

  ngOnInit(): void {
  }
  removeCategory(id: number) {
    this.service.removeCategory(id).subscribe(
      res => {
        this.service.updateCategories();
      },
      error => {
        console.log(error);
      }
    );
  }
}
