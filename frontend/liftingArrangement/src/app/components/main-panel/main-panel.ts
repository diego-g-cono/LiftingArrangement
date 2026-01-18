import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { KonvaService } from '../../core/canvas/konva.service';

@Component({
  selector: 'la-main-panel',
  standalone: true,
  templateUrl: './main-panel.html',
})
export class MainPanel implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true })
  canvasContainer!: ElementRef<HTMLDivElement>;

  constructor(private konva: KonvaService) {}

  ngAfterViewInit() {
    const container = this.canvasContainer.nativeElement;

    this.konva.init(container);
    this.konva.addBeam(0, 0); // centro del mundo
    this.konva.addHook(400, 200);
    this.konva.addSling(50,50);
    this.konva.addShackle(100,100);
    this.konva.addChain(50,100);
    this.konva.addWire(200,200);
    this.konva.addRing(100,100);
    // resize automático
    new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      this.konva.resize(width, height);
    }).observe(container);

  }
  

}
