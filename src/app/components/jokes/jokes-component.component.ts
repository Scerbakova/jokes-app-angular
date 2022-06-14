import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.scss']
})
export class JokesComponentComponent {
  jokes: Joke[] = [{
    question: "",
    answer: "",
  }]

  addJoke(joke: Joke): void {
    this.jokes = [...this.jokes, joke]
  }

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
