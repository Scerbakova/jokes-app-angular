import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent {
  @Input() joke?: Joke;
  showAnswer = false;
  buttonTitle = 'Tell me';

  @Output()
    deleteJokeEvent = new EventEmitter<null>()

  toggleAnswerVisibility(): void {
    if (!this.showAnswer) {
      this.showAnswer = !this.showAnswer;
      this.buttonTitle = 'Hide';
    } else {
      this.showAnswer = !this.showAnswer;
      this.buttonTitle = 'Tell me';
    }
  }

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }
}
