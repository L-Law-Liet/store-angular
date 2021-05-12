import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Paginator} from '../../models/paginator.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input()
  paginator!: Paginator;
  @Output()
  pageEvent = new EventEmitter<string>();
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.paginator.currentValue);
  }

  paginate(page: any): void {
    // this.service.getNewsPageable(url);
    // console.log(url);
    this.pageEvent.emit(page);
  }
}
