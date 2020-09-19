import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopMenuBarComponent } from '../components/top-menu-bar/top-menu-bar.component';

@NgModule({
  declarations: [TopMenuBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TopMenuBarComponent],
})
export class NavigationModule {}


