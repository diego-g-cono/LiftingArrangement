import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';

export interface Beam {
  id: number;

  canvasId: string;

  group: Konva.Group;

  capacity?: number;

  terminals: BeamTerminal[];

}

