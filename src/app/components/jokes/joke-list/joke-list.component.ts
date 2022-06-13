import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent {
  @Input()
  jokes: Joke[] = [{
    question: '',
    answer: ''
  }];
}
