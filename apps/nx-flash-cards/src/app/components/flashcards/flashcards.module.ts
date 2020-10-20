import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'
import { CarouselModule } from 'primeng/carousel'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { SplitButtonModule } from 'primeng/splitbutton'
import { RippleModule } from 'primeng/ripple'

// import { CarouselComponent } from './flashcards-carousel/carousel.component'
// import { FlashcardsCreateComponent } from './flashcards-create/flashcards-create.component'
// import { FlashcardsViewComponent } from './flashcards-view/flashcards-view.component'
// import { FlashcardsComponent } from './flashcards.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    CarouselModule,
    DynamicDialogModule,
    TableModule,
    AutoCompleteModule,
    SplitButtonModule,
    RippleModule,
  ],
  declarations: [
    // CarouselComponent,
    // FlashcardsCreateComponent,
    // FlashcardsViewComponent,
    // FlashcardsComponent,
  ],
  exports: [],
  providers: [],
})
export class FlashcardsModule {}
