import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';

export interface Shackle {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
