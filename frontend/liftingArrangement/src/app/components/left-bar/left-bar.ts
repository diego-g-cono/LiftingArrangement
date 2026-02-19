import { Component } from '@angular/core';
import { ELEMENT_CATALOG } from './element-catalog';
import { CommonModule } from '@angular/common';
import { ElementDefinition } from '../../interfaces/element-type.interface';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'la-left-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-bar.html',
})
export class LeftBar {
  catalog = ELEMENT_CATALOG;
  openSection: string | null = null;

  constructor(public authService: AuthService, private router: Router) {}

  toggle(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

onDragStart(event: DragEvent, item: ElementDefinition) {
  if (!event.dataTransfer) return;

  event.dataTransfer.setData(
    'application/json',
    JSON.stringify(item)
  );

  event.dataTransfer.effectAllowed = 'copy';
}

openShackleForm() {
  this.router.navigate(['/admin/shackles']);
}

}

