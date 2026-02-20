import { Injectable } from '@angular/core';
import { HeaderService } from './header.service';
import { KonvaService } from '../core/canvas/konva.service';
import { CanvasShackle } from '../interfaces/shackle.interface';
import { CanvasSling } from '../interfaces/sling.interface';
import Konva from 'konva';

export interface CheckResult {
  ok: boolean;
  appliedLoad: number;
  allowedLoad: number;
  element: CanvasShackle | CanvasSling;
}

@Injectable({ providedIn: 'root' })
export class CheckService {

  constructor(
    private headerService: HeaderService,
    private konvaService: KonvaService
  ) {}

  run(): CheckResult[] {
    const header = this.headerService.current;

    if (!header) {
      console.warn('No header defined');
      return [];
    }

    const totalLoad = header.max_load;
    const liftingPoints = header.lifting_points;

    if (!totalLoad || !liftingPoints) {
      console.warn('Header incomplete');
      return [];
    }

    const loadPerLeg = totalLoad / liftingPoints;

    const results: CheckResult[] = [];

    // SHACKLES
    for (const shackle of this.konvaService.shackles) {
      if (!shackle.properties?.working_load) continue;
      
      const applied = this.calculateShackleLoad(shackle, loadPerLeg);
      const allowed = shackle.properties.working_load;

      const ok = applied <= allowed;

      results.push({
        ok,
        appliedLoad: applied,
        allowedLoad: allowed,
        element: shackle
      });

      this.mark(shackle, ok);
    }

    // SLINGS
    for (const sling of this.konvaService.slings) {
      if (!sling.properties?.working_load) continue;

      const applied = this.calculateSlingLoad(sling, loadPerLeg);
      const allowed = sling.properties.working_load;

      const ok = applied <= allowed;

      results.push({
        ok,
        appliedLoad: applied,
        allowedLoad: allowed,
        element: sling
      });

      this.mark(sling, ok);
    }

    return results;
  }

  // CÁLCULOS

  private calculateShackleLoad(
    shackle: CanvasShackle,
    baseLoad: number
  ): number {
    return baseLoad;
  }

  private calculateSlingLoad(
    sling: CanvasSling,
    baseLoad: number
  ): number {
    return baseLoad;
  }

  // FEEDBACK VISUAL
  private mark(
    element: CanvasShackle | CanvasSling,
    ok: boolean
  ) {
    const group = element.group;
    if (!group) return;

    const color = ok ? 'green' : 'red';
    const strokeWidth = 8;

    group.find('Shape').forEach(node => {
      const line = node as Konva.Line;
      line.stroke(color);
      line.strokeWidth(strokeWidth);
    });

    group.getLayer()?.batchDraw();
  }
}
