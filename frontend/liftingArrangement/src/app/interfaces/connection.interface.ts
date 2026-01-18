import Konva from 'konva';
import { BeamTerminal } from './terminal.interface';

export interface Connection {
  id: string;
  from: BeamTerminal;
  to: BeamTerminal;
  shape: Konva.Shape;
}

