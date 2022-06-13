import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JokeFormComponent } from './components/jokes/joke-form/joke-form.component';
import { JokeListComponent } from './components/jokes/joke-list/joke-list.component';
import { JokeCardComponent } from './components/jokes/joke-card/joke-card.component';
import { JokesComponentComponent } from './components/jokes/jokes-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponentComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
