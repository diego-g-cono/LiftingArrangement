// shackle-canvas.interface.ts
import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';
import { ShackleDto } from './shackle.dto';

export interface CanvasShackle {
  canvasId: string;

  shackleId?: number;

  properties?: ShackleDto;

  group: Konva.Group;
  terminals: BeamTerminal[];
}
