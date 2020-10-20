import { Component, OnInit } from '@angular/core'
import { CardCategory } from '../../../models/flashcard.model'

@Component({
  selector: 'flash-cards-game-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  categories: CardCategory[] = [
    {
      name: 'Test1',
      category: 'Angular',
      totalQuestions: 25,
    },
    {
      name: 'Test2',
      category: 'C#',
      totalQuestions: 50,
    },
    {
      name: 'Test3',
      category: 'React',
      totalQuestions: 25,
    },
    {
      name: 'Test4',
      category: 'Javascript',
      totalQuestions: 50,
    },
    {
      name: 'Test1',
      category: 'Java',
      totalQuestions: 100,
    },
    {
      name: 'Test1',
      category: 'Angular',
      totalQuestions: 25,
    },
    {
      name: 'Test2',
      category: 'C#',
      totalQuestions: 50,
    },
    {
      name: 'Test3',
      category: 'React',
      totalQuestions: 25,
    },
    {
      name: 'Test4',
      category: 'Javascript',
      totalQuestions: 50,
    },
    {
      name: 'Test1',
      category: 'Java',
      totalQuestions: 100,
    },
  ]
  responsiveOptions

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ]
  }

  ngOnInit() {}
}
