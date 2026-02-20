export type TerminalOwner = 'BEAM' | 'CRANEHOOK' | 'SLING' | 'SHACKLE' | 'CHAIN' | 'WIRE' | 'RING' | 'LINKCHAIN' | 'HOOK';

export type TerminalType = 'TOP' | 'BOTTOM';

export interface BeamTerminal {
  id: string;
  ownerCanvasId: string;
  ownerDbId?: number;
  ownerType: TerminalOwner;
  type: TerminalType;
  index: number;
  localX: number;
  localY: number;
}

