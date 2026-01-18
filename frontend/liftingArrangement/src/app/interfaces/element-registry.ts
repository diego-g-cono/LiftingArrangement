import { ElementDefinition } from "./element-type.interface";

export const ELEMENT_REGISTRY: ElementDefinition[] = [
  {
    type: 'BEAM',
    label: 'Beam',
    icon: 'assets/icons/beam.svg',
  },
  {
    type: 'HOOK',
    label: 'Hook',
    icon: 'assets/icons/hook.svg',
  },
  {
    type: 'SLING',
    label: 'Sling',
    icon: 'assets/icons/sling.svg',
  },
  {
    type: 'CHAIN',
    label: 'Chain',
    icon: 'assets/icons/chain.svg',
  },
  {
    type: 'SHACKLE',
    label: 'Shackle',
    icon: 'assets/icons/shackle.svg',
  },
];
