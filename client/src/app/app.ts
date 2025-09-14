import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conciertos } from './components/list-conciertos/list-conciertos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Conciertos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
