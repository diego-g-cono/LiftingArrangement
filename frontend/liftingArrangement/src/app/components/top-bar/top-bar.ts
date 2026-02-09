import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { CheckService } from '../../services/check.service';

@Component({
  selector: 'la-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.html',
})
export class TopBar { 
  fileMenuOpen = false;

  constructor(private headerDialog: HeaderService,
    private checkService: CheckService
  ) {}

  toggleFileMenu() {
    this.fileMenuOpen = !this.fileMenuOpen;
  }

  newProject() {
    this.fileMenuOpen = false;
    this.headerDialog.open();
  }

  check() {
  this.checkService.run();
  }

}

