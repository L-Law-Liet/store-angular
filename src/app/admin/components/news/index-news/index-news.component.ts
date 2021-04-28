import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../../services/news.service';
import {Article} from '../../../../models/article.model';

@Component({
  selector: 'app-index-news',
  templateUrl: './index-news.component.html',
  styleUrls: ['./index-news.component.sass']
})
export class IndexNewsComponent implements OnInit {
  // @ts-ignore
  news: Article[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }
  getNews() {
    this.service.getNews().subscribe(
      res => {
        console.log(res);
        this.news = res;
      }
    )
  }
  removeArticle(id: number){
    this.service.removeArticle(id).subscribe(
      res => {
        console.log(res);
        this.getNews();
      },
      error => {
        alert('Not Deleted')
      }
    );
  }

}
