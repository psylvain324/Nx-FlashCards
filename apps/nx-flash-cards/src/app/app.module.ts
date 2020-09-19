import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component'
import { CarouselComponent } from './components/carousel/carousel.component'

import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'
import { CarouselModule } from 'primeng/carousel'

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
  ],
  declarations: [AppComponent, TopMenuBarComponent, CarouselComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
