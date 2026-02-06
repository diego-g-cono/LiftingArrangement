export type TerminalOwner = 'BEAM' | 'CRANEHOOK' | 'SLING' | 'SHACKLE' | 'CHAIN' | 'WIRE' | 'RING' | 'LINKCHAIN' | 'HOOK';

export type TerminalType = 'TOP' | 'BOTTOM';

export interface BeamTerminal {
  id: string;

  // 🔵 referencia GRÁFICA (Konva)
  ownerCanvasId: string;

  // (opcional, para DB futura)
  ownerDbId?: number;

  ownerType: TerminalOwner;
  type: TerminalType;
  index: number;

  localX: number;
  localY: number;
}

