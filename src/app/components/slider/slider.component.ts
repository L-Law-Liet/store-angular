import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  slides: {id: number, title: string, body: string, image: string}[] = [
    {id: 1, title: 'First slide label', body: 'Some representative placeholder content for the first slide.', image: 'assets/imgs/oneplus.png'},
    {id: 1, title: 'Second slide label', body: 'Some representative placeholder content for the first slide.', image: 'assets/imgs/oneplus.png'},
    {id: 1, title: 'Third slide label', body: 'Some representative placeholder content for the first slide.', image: 'assets/imgs/oneplus.png'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
