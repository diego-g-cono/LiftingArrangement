import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';

export interface Beam {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
