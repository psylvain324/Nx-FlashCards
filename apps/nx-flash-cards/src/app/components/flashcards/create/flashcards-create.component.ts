import { Component, OnInit } from '@angular/core'
import { FlashCard } from '../../../models/flashcard.model'
import { MessageService } from 'primeng/api'
import { MenuItem } from 'primeng/api'

@Component({
  providers: [MessageService],
  selector: 'flash-cards-game-flashcards-create',
  templateUrl: './flashcards-create.component.html',
  styleUrls: ['./flashcards-create.component.css'],
})
export class FlashcardsCreateComponent implements OnInit {
  items: MenuItem[]
  selectedCategory: any
  filteredCategories: any[]
  selectedTags: any[]
  filteredTags: any[]
  categories: any[]
  tags: any[]

  flashCards: FlashCard[] = [
    {
      id: '1',
      question: 'Question 1',
      answer: 'Answer1',
      category: 'Test',
      author: 'Phil',
    },
    {
      id: '2',
      question: 'Question 2',
      answer: 'Answer2',
      category: 'Test',
      author: 'Phil',
    },
    {
      id: '3',
      question: 'Question 3',
      answer: 'Answer3',
      category: 'Test',
      author: 'Phil',
    },
  ]

  constructor(
    private messageService: MessageService,
  ) //private primengConfig: PrimeNGConfig,
  {}

  ngOnInit() {
    //this.primengConfig.ripple = true
  }

  selectFlashCard(flashCard: FlashCard) {}

  filterCategory(event) {
    const filtered: any[] = []
    const query = event.query
    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i]
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(category)
      }
    }
    this.filteredCategories = filtered
  }

  filterTags(event) {
    const filtered: any[] = []
    const query = event.query
    for (let i = 0; i < this.tags.length; i++) {
      const tag = this.tags[i]
      if (tag.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(tag)
      }
    }
    this.filteredCategories = filtered
  }

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Data Saved',
    })
  }
}
