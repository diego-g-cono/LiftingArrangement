import { ElementCategory } from "../../interfaces/element-category.type";
import { ElementDefinition } from "../../interfaces/element-type.interface";

export const ELEMENT_CATALOG: Record<ElementCategory, ElementDefinition[]> = {
  BEAMS: [
    {
      id: 'percha-integral',
      label: 'Percha integral',
      preview: 'assets/beams/percha-integral.png',
      type: 'BEAM',
    },
  ],
  HOOKS: [
     {
       id: 'crane-hook',
       label: 'Crane Hook',
       preview: 'assets/hooks/crane-hook.png',
       type: 'CRANEHOOK'
    },
    {
       id: 'hook',
       label: 'Hook',
       preview: 'assets/hooks/hook.png',
       type: 'HOOK',
    },
    ],
  SLINGS: [
       {
       id: 'webbing-sling',
      label: 'Webbing sling',
      preview: 'assets/slings/sling-yellow.png',
      type: 'SLING',
     },
     {
      id: 'wire-sling',
      label: 'Wire sling',
      preview: 'assets/slings/wire-sling.png',
      type: 'WIRE',
     },
   ],
  CONNECTORS: [
    {
      id: 'ring',
      label: 'Ring',
      preview: 'assets/connectors/ring.png',
      type: 'RING',
    },
    {
      id: 'link-chain',
      label: 'Link chain',
      preview: 'assets/connectors/link.png',
      type: 'LINKCHAIN',
    },
  ],
  SHACKLES: [
    {
      id: 'shackle',
      label: 'Shackle',
      preview: 'assets/shackles/shackle.png',
      type: 'SHACKLE',
    },
  ],
   CHAINS: [
     {
       id: 'chain',
      label: 'Chain',
      preview: 'assets/chains/chain.png',
      type: 'CHAIN',
     },
   ],

};
