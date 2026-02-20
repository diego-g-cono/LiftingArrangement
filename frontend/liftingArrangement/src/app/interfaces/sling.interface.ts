import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';
import { SlingDto } from './sling.dto';

export interface CanvasSling {
  canvasId: string;
  slingId?: number;
  properties?: SlingDto;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
