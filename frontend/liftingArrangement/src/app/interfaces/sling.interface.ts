import Konva from "konva";
import { BeamTerminal } from "./terminal.interface";

export interface Sling {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
