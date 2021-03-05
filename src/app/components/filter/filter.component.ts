import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  filters: {key: string, value: string}[] = [
    {key: 'az', value: 'A-Z'},
    {key: 'za', value: 'Z-A'},
    {key: 'ascPrice', value: 'Ascending price'},
    {key: 'descPrice', value: 'Descending price'},
  ];
  search = '';
  @Input()
  searchOptions: string[] = [];
  @Output()
  newSearchEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  searching(): void {
    this.newSearchEvent.emit(this.search.toLowerCase());
  }
}
