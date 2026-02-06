import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "./components/top-bar/top-bar";
import { LeftBar } from './components/left-bar/left-bar';
import { MainPanel } from './components/main-panel/main-panel';
import { HeaderDialog } from './components/header-dialog/header-dialog';
import { ShacklePanelComponent } from "./components/shackle-panel/shackle-panel";
import { SlingPanelComponent } from "./components/sling-panel/sling-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, LeftBar, MainPanel, HeaderDialog, ShacklePanelComponent, SlingPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('liftingArrangement');
}
