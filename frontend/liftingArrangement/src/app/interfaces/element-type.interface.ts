export type ElementType =
  | 'BEAM'
  | 'WIRE'
  | 'SLING'
  | 'CHAIN'
  | 'SHACKLE'
  | 'HOOK'
  | 'RING'
  | 'LINKCHAIN'  
  | 'CRANEHOOK';

export interface ElementDefinition {
  id: string;
  label: string;
  preview: string;
  type: ElementType;
}

