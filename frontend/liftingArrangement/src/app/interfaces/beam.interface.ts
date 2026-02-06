import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';

export interface Beam {
  /** ID de base de datos */
  id: number;

  /** ID gráfico (Konva) */
  canvasId: string;

  /** Nodo Konva */
  group: Konva.Group;

  /** Otros datos */
  capacity?: number;

  terminals: BeamTerminal[];

}

