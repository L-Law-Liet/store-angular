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

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(
      res => {
        console.log(res);
        this.categories = res;
      }
    );
  }

}
