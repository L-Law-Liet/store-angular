import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  router: Router;
  categories: Category[];
  // @ts-ignore
  constructor(private router: Router,
              private service: CategoryService) {
    this.router = router;
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{
    this.service.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

}
