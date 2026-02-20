import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { KonvaService } from '../../core/canvas/konva.service';
import { ElementDefinition } from '../../interfaces/element-type.interface';

@Component({
  selector: 'la-main-panel',
  standalone: true,
  templateUrl: './main-panel.html',
})
export class MainPanel implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true })
  canvasContainer!: ElementRef<HTMLDivElement>;
  
  constructor(private konva: KonvaService) {}
  
  
onDragOver(event: DragEvent) {
  event.preventDefault();
  event.dataTransfer!.dropEffect = 'copy';
}

onDrop(event: DragEvent) {
  event.preventDefault();

  const data = event.dataTransfer?.getData('application/json');
  if (!data) return;

  const def: ElementDefinition = JSON.parse(data);

  const rect = this.canvasContainer.nativeElement.getBoundingClientRect();

  // coordenadas del canvas
  const x = event.clientX - rect.left - this.konva.camera.x();
  const y = event.clientY - rect.top - this.konva.camera.y();

  this.onDropElement(def, x, y);
}


  ngAfterViewInit() {
    const container = this.canvasContainer.nativeElement;

    this.konva.init(container);

    new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      this.konva.resize(width, height);
    }).observe(container);
    
  }
  onDropElement(def: ElementDefinition, x: number, y: number) {
    console.log("onDropElement");
  switch (def.type) {
    case 'BEAM':
      console.log("onDropElement");
      this.konva.addBeam(x, y);
      break;
    case 'SLING':
      this.konva.addSling(x, y);
      break;
    case 'WIRE':
      this.konva.addWire(x, y);
      break;
    case 'CHAIN':
      this.konva.addChain(x, y);
      break;
    case 'SHACKLE':
      this.konva.addShackle(x, y);
      break;
    case 'CRANEHOOK':
      this.konva.addCraneHook(x, y);
      break;
    case 'HOOK':
      this.konva.addHook(x, y);
      break;
    case 'RING':
      this.konva.addRing(x, y);
      break;
    case 'LINKCHAIN':
      this.konva.addLinkChain(x, y);
      break;
  };
}
@HostListener('window:keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Delete' || event.key === 'Backspace') {
    this.konva.deleteSelected();
  }
}

}
