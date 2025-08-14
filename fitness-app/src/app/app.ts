import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],  // plural
  standalone: false,
})
export class App {
  protected readonly title = signal('fitness-app');
}
