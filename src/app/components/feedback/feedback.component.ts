import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Feedback} from '../../models/feedback.model';
import {FeedbackService} from '../../services/feedback.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {
  stars = ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'];
  default = 'fa fa-star';
  hovered = 'fa fa-star text-secondary';
  clicked = 'fa fa-star text-warning';
  isClicked = false;
  nStar = 0;
  @Input()
  canComment = false;
  @Input()
    // @ts-ignore
  product: Product;
  @Input()
  feedbacks: Feedback[] = [];
  // @ts-ignore
  form: FormGroup;

  @Output()
  feedbackUpdate = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private auth: UserService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      rate: this.nStar,
      body: ''
    });
  }

  hover(n: number) {
    if (!this.isClicked){
      for (let i = 0; i <= n; i++){
        this.stars[i] = this.hovered;
      }
      for (let i = n+1; i < this.stars.length; i++){
        this.stars[i] = this.default;
      }
    }
  }

  click(n: number) {
    this.nStar = n;
    this.isClicked = true;
    for (let i = 0; i <= n; i++){
      this.stars[i] = this.clicked;
    }
    for (let i = n+1; i < this.stars.length; i++){
      this.stars[i] = this.default;
    }
  }

  sendFeedback() {
    let fd = new FormData();
    // @ts-ignore
    fd.append('rate', this.nStar);
    fd.append('body', this.form.controls.body.value);
    // @ts-ignore
    fd.append('user_id', this.auth.user.id);
    // @ts-ignore
    fd.append('product_id', this.product.id);
    console.log(fd);
    this.feedbackService.addFeedback(fd).subscribe(
      res => {
        console.log(res);
        this.form.reset();
        this.isClicked = false;
        this.hover(this.nStar);
        this.feedbackUpdate.emit();
      },
      error => {
        console.log(error);
      }
    );
  }
}
