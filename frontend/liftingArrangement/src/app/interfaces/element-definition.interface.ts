import { ElementType } from './element-type.interface';

export interface ElementDefinition {
  id: string;
  label: string;
  preview: string;
  type: ElementType;
}
