import { Component, OnInit } from '@angular/core';
import { Image } from '../models/images';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  //slides = [943, 1022, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  slides: Image[] = [
    { description:'slides 1',
      uri: 'assets/slides/aurora.jpg'
    },
    {
      description: 'slides 2',
      uri: 'assets/slides/slides2.jpg'
    },
    {
      description: 'slides 3',
      uri: 'assets/slides/slides3.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
