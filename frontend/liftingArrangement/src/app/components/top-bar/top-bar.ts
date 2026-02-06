import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.html',
})
export class TopBar { 
  fileMenuOpen = false;

  constructor(private headerDialog: HeaderService) {}

  toggleFileMenu() {
    this.fileMenuOpen = !this.fileMenuOpen;
  }

  newProject() {
    this.fileMenuOpen = false;
    this.headerDialog.open();
  }
}

