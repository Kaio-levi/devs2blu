import { Component, signal } from '@angular/core';
import { Media } from "./media/media";

@Component({
  selector: 'app-root',
  imports: [Media],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('media');
}
