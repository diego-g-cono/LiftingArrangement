import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShacklePanelService } from '../../services/shackle-panel.service';
import { ShackleDto } from '../../interfaces/shackle.dto';
import { CanvasShackle } from '../../interfaces/shackle.interface';
import { ShackleApiService } from '../../services/shackle-api.service';

@Component({
  selector: 'la-shackle-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shackle-panel.html',
})
export class ShacklePanelComponent implements OnInit, OnDestroy {

  visible = false;

  /** Shackle del canvas que estoy editando */
  selectedCanvasShackle?: CanvasShackle;

  /** Catálogo desde backend */
  shacklesCatalog: ShackleDto[] = [];

  /** ID seleccionado en el select */
  selectedShackleId?: number;

  private sub?: Subscription;

  constructor(
    private panelService: ShacklePanelService,
    private shackleService: ShackleApiService
  ) {}

  ngOnInit() {
    // Cargar catálogo
    this.shackleService.getAll().subscribe({
      next: data => this.shacklesCatalog = data,
      error: err => console.error('Error loading shackles', err)
    });

    // Abrir panel
    this.sub = this.panelService.open$.subscribe(shackle => {
      this.selectedCanvasShackle = shackle;
      this.selectedShackleId = shackle.shackleId;
      this.visible = true;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  assign() {
    if (!this.selectedCanvasShackle || !this.selectedShackleId) return;

    const dto = this.shacklesCatalog.find(
      s => s.id === this.selectedShackleId
    );

    if (!dto) return;

    // 🔥 ASIGNACIÓN REAL
    this.selectedCanvasShackle.shackleId = dto.id;
    this.selectedCanvasShackle.properties = { ...dto };

    this.visible = false;
  }

  close() {
    this.visible = false;
  }
}
