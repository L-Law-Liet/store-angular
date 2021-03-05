import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {Article} from '../../models/article.model';
import {Link} from '../../models/link.model';
import {Paginator} from '../../models/paginator.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news: Article[] = [];
  // @ts-ignore
  paginator: Paginator;
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNewsPageable();
  }

  getNewsPageable(page?: any): void {
    console.log(page);
    this.service.getNewsPageable(page).subscribe( res => {
      console.log(res);
      this.news = res.data;
      this.paginator = new Paginator(res.current_page, res.from, res.last_page, res.next_page_url,
        res.prev_page_url, res.to, res.total, res.links);
    });
  }
  changePage(page: any): void {
    this.getNewsPageable(page);
  }
}
