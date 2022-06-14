import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
})
export class JokeFormComponent implements OnInit {
  @ViewChild('inputQuestion') inputQuestion: ElementRef | undefined;

  @Output()
  addJokeEvent = new EventEmitter<Joke>();

  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buidForm();
  }

  ngAfterViewInit(): void {
    this.focusInputElement();
  }

  buidForm(): void {
    this.jokeForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  addJoke(): void {
    this.addJokeEvent.emit(this.jokeForm.value);
    this.jokeForm.reset();
    this.focusInputElement();
  }

  focusInputElement(): void {
    this.inputQuestion?.nativeElement.focus();
  }
}
