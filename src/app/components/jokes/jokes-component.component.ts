import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.scss']
})
export class JokesComponentComponent implements OnInit {
  jokes: Joke[] = [{
    question: "question",
    answer: "answer",
  }]

  addJoke(joke: Joke): void {
    this.jokes = [...this.jokes, joke]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
