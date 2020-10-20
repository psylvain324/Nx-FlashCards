// import { BrowserModule } from '@angular/platform-browser'
// import { FormsModule } from '@angular/forms'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlashcardsModule } from './components/flashcards/flashcards.module';

import { AppComponent } from './app.component'
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component'
import { CarouselComponent } from './components/flashcards/flashcards-carousel/carousel.component'
import { FlashcardsCreateComponent } from './components/flashcards/create/flashcards-create.component'
import { FlashcardsViewComponent } from './components/flashcards/flashcards-view/flashcards-view.component'
import { FlashcardsComponent } from './components/flashcards/flashcards.component'

@NgModule({
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    // FormsModule,
    FlashcardsModule
  ],
  declarations: [
    AppComponent,
    TopMenuBarComponent,
    CarouselComponent,
    FlashcardsCreateComponent,
    FlashcardsViewComponent,
    FlashcardsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
