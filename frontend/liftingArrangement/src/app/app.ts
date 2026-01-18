import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "./components/top-bar/top-bar";
import { LeftBar } from './components/left-bar/left-bar';
import { MainPanel } from './components/main-panel/main-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, LeftBar, MainPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('liftingArrangement');
}
