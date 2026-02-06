import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';
import { SlingDto } from './sling.dto';

export interface CanvasSling {
  /** ID gráfico */
  canvasId: string;

  /** Referencia al sling de DB */
  slingId?: number;

  /** Snapshot del DTO elegido */
  properties?: SlingDto;

  /** Konva */
  group: Konva.Group;
  terminals: BeamTerminal[];
}
