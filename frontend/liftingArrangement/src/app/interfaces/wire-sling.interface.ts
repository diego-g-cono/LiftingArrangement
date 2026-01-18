import Konva from "konva";
import { BeamTerminal } from "./terminal.interface";

export interface WireSling {
  id: string;
  group: Konva.Group;
  terminals: BeamTerminal[];
}