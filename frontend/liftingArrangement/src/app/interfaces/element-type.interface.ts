export type ElementType =
  | 'BEAM'
  | 'HOOK'
  | 'SLING'
  | 'CHAIN'
  | 'SHACKLE';

export interface ElementDefinition {
  type: ElementType;
  label: string;
  icon: string;
}
