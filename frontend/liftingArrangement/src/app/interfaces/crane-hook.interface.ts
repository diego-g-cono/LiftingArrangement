import Konva from "konva";
import { BeamTerminal } from "./terminal.interface";

export interface CraneHook {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}
