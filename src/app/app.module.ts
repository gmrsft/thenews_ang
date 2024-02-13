import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { ApiconsumComponent } from './pages/apiconsum/apiconsum.component';
import { PooComponent } from './pages/poo/poo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    TodolistComponent,
    QuizzComponent,
    ApiconsumComponent,
    PooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicione FormsModule aqui
    HttpClientModule // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
