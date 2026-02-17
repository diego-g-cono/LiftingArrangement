import { Component, signal } from '@angular/core';
import { TopBar } from "./components/top-bar/top-bar";
import { LeftBar } from './components/left-bar/left-bar';
import { HeaderDialog } from './components/header-dialog/header-dialog';
import { MainPanel } from "./components/main-panel/main-panel";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

