import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponentComponent } from './jokes-component.component';

describe('JokesComponentComponent', () => {
  let component: JokesComponentComponent;
  let fixture: ComponentFixture<JokesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
