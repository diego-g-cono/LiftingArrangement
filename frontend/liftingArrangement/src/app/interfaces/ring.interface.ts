import Konva from "konva";
import { BeamTerminal } from "./terminal.interface";

export interface Ring {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
