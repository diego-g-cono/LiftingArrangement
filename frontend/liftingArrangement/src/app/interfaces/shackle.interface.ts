// shackle-canvas.interface.ts
import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';
import { ShackleDto } from './shackle.dto';

export interface CanvasShackle {
  /** ID gráfico (UUID) */
  canvasId: string;

  /** Referencia al shackle de DB */
  shackleId?: number;

  /** Snapshot de propiedades elegidas */
  properties?: ShackleDto;

  /** Konva */
  group: Konva.Group;
  terminals: BeamTerminal[];
}
