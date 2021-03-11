import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  loading = true;
  // @ts-ignore
  router: Router;
  categories: Category[];
  // @ts-ignore
  constructor(private router: Router,
              private service: CategoryService,
              public auth: UserService) {
    this.router = router;
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
    if (this.auth.isAuth()){
      this.auth.getUser().subscribe(
        res => {
          this.auth.user = res;
          this.loading = false;
        }
      );
    }
    else {
      this.loading = false
    }
  }

  getCategories(): void{
    this.service.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  logout(){
    this.auth.logout();
  }

}
