import { Component, OnInit } from '@angular/core';
import { SlingPanelService } from '../../services/sling-panel.service';
import { SlingService } from '../../services/sling.service';
import { CanvasSling } from '../../interfaces/sling.interface';
import { SlingDto } from '../../interfaces/sling.dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'la-sling-panel',
  templateUrl: './sling-panel.html',
  imports: [FormsModule, CommonModule],
})
export class SlingPanelComponent implements OnInit {

  visible = false;
  selectedCanvasSling?: CanvasSling;

  slingsCatalog: SlingDto[] = [];
  selectedSlingId?: number;

  constructor(
    private panelService: SlingPanelService,
    private slingService: SlingService
  ) {}

  ngOnInit() {

    // abrir panel
    this.panelService.open$.subscribe(sling => {
      this.visible = true;
      this.selectedCanvasSling = sling;
      this.selectedSlingId = sling?.slingId;
    });

    // cargar catálogo
    this.slingService.getAll().subscribe(data => {
      this.slingsCatalog = data;
    });
  }

  onSelectChange() {
    // opcional: preview
  }

  assign() {
    if (!this.selectedCanvasSling || !this.selectedSlingId) return;

    const selected = this.slingsCatalog.find(
      s => s.id === this.selectedSlingId
    );

    if (!selected) return;

    // 🔥 ASIGNACIÓN REAL
    this.selectedCanvasSling.slingId = selected.id;
    this.selectedCanvasSling.properties = selected;
  }
  close() {
  this.visible = false;
  this.selectedCanvasSling = undefined;
  this.selectedSlingId = undefined;

  this.panelService.close();
}

}
