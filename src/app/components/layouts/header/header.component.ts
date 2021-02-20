import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  router: Router;
  // @ts-ignore
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

}
