import { Component } from "@angular/core";
import { LeftBar } from "./components/left-bar/left-bar";
import { MainPanel } from "./components/main-panel/main-panel";
import { TopBar } from "./components/top-bar/top-bar";
import { HeaderDialog } from "./components/header-dialog/header-dialog";
import { ShacklePanelComponent } from "./components/shackle-panel/shackle-panel";
import { SlingPanelComponent } from "./components/sling-panel/sling-panel";

@Component({
  selector: 'la-app-layout',
  standalone: true,
  imports: [
    TopBar,
    LeftBar,
    MainPanel,
    HeaderDialog,
    ShacklePanelComponent,
    SlingPanelComponent
],
  template: `
    <la-top-bar></la-top-bar>

    <div class="flex h-screen">
    <la-left-bar></la-left-bar>

    <div class="flex-1">
        <la-main-panel></la-main-panel>
    </div>
    </div>

    <la-header-dialog></la-header-dialog>
    <la-shackle-panel></la-shackle-panel>
    <la-sling-panel></la-sling-panel>
  `
})
export class AppLayoutComponent {}
