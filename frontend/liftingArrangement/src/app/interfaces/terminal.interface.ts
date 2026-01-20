export type TerminalOwner = 'BEAM' | 'CRANEHOOK' | 'SLING' | 'SHACKLE' | 'CHAIN' | 'WIRE' | 'RING' | 'LINKCHAIN' | 'HOOK';

export type TerminalType = 'TOP' | 'BOTTOM';

export interface BeamTerminal {
  id: string;

  /** ID del elemento dueño (beam, hook, sling) */
  ownerId: string;

  /** Tipo de elemento dueño */
  ownerType: TerminalOwner;

  /** Tipo de terminal dentro del elemento */
  type: TerminalType;

  /** Índice dentro del elemento (ej: 0..10 en una percha) */
  index: number;

  /** Posición local respecto al grupo */
  localX: number;
  localY: number;
}

