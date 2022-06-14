import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.scss'],
})
export class JokesComponentComponent implements OnInit {
  jokes: Joke[] = [
    {
      question: '',
      answer: '',
    },
  ];

  ngOnInit() {
    if (localStorage.getItem('Jokes') === null) {
      this.jokes = [];
    } else {
      this.jokes = JSON.parse(localStorage.getItem('Jokes')!);
    }
  }

  addJoke(joke: Joke): void {
    this.jokes = [...this.jokes, joke];
    localStorage.setItem('Jokes', JSON.stringify(this.jokes));
  }

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
    localStorage.setItem('Jokes', JSON.stringify(this.jokes));
  }
}
