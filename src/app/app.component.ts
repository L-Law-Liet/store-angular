import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {CategoryService} from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Store';
  constructor(private auth: UserService,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.categoryService.updateCategories();
    if (this.auth.isAuth()){
      // @ts-ignore

      this.auth.setUser(this.auth.getUser());
      console.log(this.auth.user);
    }
  }
}
