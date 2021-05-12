import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Article} from '../../../../models/article.model';
import {NewsService} from '../../../../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.sass']
})
export class AddNewsComponent implements OnInit {
  loading = true;
  form: FormGroup;
  article: Article;
  image: File;
  fd = new FormData();

  constructor(
    private fb: FormBuilder,
    private service: NewsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.service.getArticle(this.activeRoute.snapshot.paramMap.get('id')).subscribe(
        res => {
          console.log(res);
          this.article = res;
          this.form = this.fb.group((({ title, image, body }) => ({ title, image, body }))(this.article));
          console.log(this.form.getRawValue());
          this.loading = false;
        }
      );
    }
    else {
      this.form = this.fb.group({
        title: '',
        image: '',
        body: '',
      });
      console.log(this.form.getRawValue());
      this.loading = false;
    }
  }
  private addArticle() {

    this.service.addArticle(this.fd).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/news'])
      },
      error => {
        this.form.enable();
        this.form.setErrors(error.error.errors);
      }
    );
  }
  onSubmit() {
    this.form.disable();
    this.fd.append('image', this.image);
    this.fd.append('title', this.form.get('title')?.value);
    this.fd.append('body', this.form.get('body')?.value);
    console.log(this.fd);
    if (this.activeRoute.snapshot.paramMap.has('id')){
      this.updateArticle();
    }
    else{
      this.addArticle();
    }
  }

  private updateArticle() {
    this.service.updateArticle(this.article.id, this.fd).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/news'])
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
