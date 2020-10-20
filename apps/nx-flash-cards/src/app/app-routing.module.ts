import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardsCreateComponent } from './components//flashcards/flashcards-create/flashcards-create.component';
import { FlashcardsViewComponent } from './components/flashcards/flashcards-view/flashcards-view.component';

const routes: Routes = [
  { path: 'flashcards-create', component: FlashcardsCreateComponent },
  { path: 'flashcards-view', component: FlashcardsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
