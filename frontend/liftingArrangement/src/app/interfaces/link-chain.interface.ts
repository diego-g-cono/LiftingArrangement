import Konva from "konva";
import { BeamTerminal } from "./terminal.interface";

export interface LinkChain {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
