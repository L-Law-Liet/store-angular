import { Component, OnInit } from '@angular/core';

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
  searchOptions: string[] = [
    'San Francisco',
    'New York',
    'Seattle',
    'Los Angeles',
    'Chicago',
  ];
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

}
