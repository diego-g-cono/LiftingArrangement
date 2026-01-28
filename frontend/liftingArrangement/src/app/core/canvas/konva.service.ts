import { Injectable } from '@angular/core';
import Konva from 'konva';
import { Beam } from '../../interfaces/beam.interface';
import { BeamTerminal } from '../../interfaces/terminal.interface';
import { CraneHook } from '../../interfaces/crane-hook.interface';
import { Connection } from '../../interfaces/connection.interface';
import { Sling } from '../../interfaces/sling.interface';
import { ElementType } from '../../interfaces/element-type.interface';
import { Shackle } from '../../interfaces/shackle.interface';
import { WireSling } from '../../interfaces/wire-sling.interface';
import { Ring } from '../../interfaces/ring.interface';
import { LinkChain } from '../../interfaces/link-chain.interface';
import { Hook } from '../../interfaces/hook.interface';


@Injectable({ providedIn: 'root' })
export class KonvaService {
  private slingImageObj: HTMLImageElement | null = null;
  stage!: Konva.Stage;
  layer!: Konva.Layer;
  camera!: Konva.Group;

  scale = 1;
  gridSize = 40;
  beams: Beam[] = [];
  craneHooks: CraneHook[] = [];
  slings: Sling[] = [];
  connections: Connection[] = [];
  shackle: Shackle[] = [];
  rings: Ring[] = [];
  wires: WireSling[] = [];
  shackles : Shackle[] = [];
  linkChains: LinkChain[] = [];
  hooks: Hook[] = [];

  rotationStep = 15;
  activeTerminal: BeamTerminal | null = null;
  activeLine: Konva.Line | null = null;
  activeTerminalShape: Konva.Circle | null = null;
  activeGroup: Konva.Group | null = null;
  selectedGroup: Konva.Group | null = null;
  selectionRect: Konva.Rect | null = null;



  init(container: HTMLDivElement) {
    this.stage = new Konva.Stage({
      container,
      width: container.clientWidth,
      height: container.clientHeight,
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    // Camera group
    this.camera = new Konva.Group({
      x: this.stage.width() / 2,
      y: this.stage.height() / 2,
    });

    

    this.layer.add(this.camera);
    this.layer.draw();

    this.initPan();
    this.initZoom();
    this.drawGrid();

  }

  resize(width: number, height: number) {
    this.stage.width(width);
    this.stage.height(height);
  }

  /* ---------------- PAN ---------------- */

  private initPan() {
    let isPanning = false;
    let lastPos = { x: 0, y: 0 };

    this.stage.on('mousedown', e => {
      if (e.target === this.stage) {
        isPanning = true;
        lastPos = this.stage.getPointerPosition()!;
      }
    });

    this.stage.on('mousemove', () => {
      if (!isPanning) return;

      const pos = this.stage.getPointerPosition()!;
      const dx = pos.x - lastPos.x;
      const dy = pos.y - lastPos.y;

      this.camera.x(this.camera.x() + dx);
      this.camera.y(this.camera.y() + dy);

      lastPos = pos;
      this.layer.batchDraw();
    });

    this.stage.on('mouseup mouseleave', () => {
      isPanning = false;
    });
    this.stage.on('click', e => {
  if (e.target === this.stage) {
    this.clearSelection();
  }
});

  }

  /* ---------------- ZOOM ---------------- */

private initZoom() {
  this.stage.on('wheel', e => {
    e.evt.preventDefault();

    // ======================
    // ROTACIÓN (SHIFT + wheel)
    // ======================
    if (e.evt.shiftKey && this.activeGroup) {
      const delta = e.evt.deltaY > 0 ? 1 : -1;
      const angleStep = 5;

      this.activeGroup.rotation(
        this.activeGroup.rotation() + delta * angleStep
      );

      this.updateConnections();
      this.layer.batchDraw();
      return;
    }

    // ======================
    // ESCALADO (CTRL + wheel)
    // ======================
    if (e.evt.ctrlKey && this.activeGroup) {
      const scaleBy = 1.05;
      const direction = e.evt.deltaY < 0 ? 1 : -1;

      let newScale = this.activeGroup.scaleX();
      newScale *= direction > 0 ? scaleBy : 1 / scaleBy;

      // límites (MUY importante)
      newScale = Math.max(0.1, Math.min(5, newScale));

      this.activeGroup.scale({
        x: newScale,
        y: newScale,
      });

      this.updateConnections();
      this.layer.batchDraw();
      return;
    }

    // ======================
    // ZOOM (rueda normal)
    // ======================
    const oldScale = this.scale;
    const pointer = this.stage.getPointerPosition();
    if (!pointer) return;

    const scaleBy = 1.05;
    this.scale =
      e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    const mousePointTo = {
      x: (pointer.x - this.camera.x()) / oldScale,
      y: (pointer.y - this.camera.y()) / oldScale,
    };

    this.camera.scale({ x: this.scale, y: this.scale });

    this.camera.position({
      x: pointer.x - mousePointTo.x * this.scale,
      y: pointer.y - mousePointTo.y * this.scale,
    });

    this.layer.batchDraw();
  });
}


  drawGrid(size = 40, range = 5000) {
    const lines: Konva.Line[] = [];

    for (let i = -range; i <= range; i += size) {
        lines.push(
        new Konva.Line({
            points: [-range, i, range, i],
            stroke: '#334155',
            strokeWidth: 1,
        }),
        new Konva.Line({
            points: [i, -range, i, range],
            stroke: '#334155',
            strokeWidth: 1,
        })
        );
    }

    this.camera.add(...lines);
    this.layer.draw();
    }

addBeam(x = 0, y = 0) {
  const beamId = crypto.randomUUID(); // 🔹 ID del beam
  const terminals: BeamTerminal[] = [];

  const imageObj = new Image();
  imageObj.src = 'assets/beams/percha-integral.png';
  
  imageObj.onload = () => {
    const beamGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: beamId,
    });

    const beamImage = new Konva.Image({
      image: imageObj,
      x: 0,
      y: 0,
    });

    beamImage.offsetX(imageObj.width / 2);
    beamImage.offsetY(imageObj.height / 2);

    beamGroup.add(beamImage);

    // Snap al soltar
    beamGroup.on('dragend', () => {
      beamGroup.position({
        x: this.snapToGrid(beamGroup.x()),
        y: this.snapToGrid(beamGroup.y()),
      });
      this.layer.batchDraw();
    });
      beamGroup.on('dragmove', () => {
    this.updateConnections();
  });
  beamGroup.on('click', e => {
  e.cancelBubble = true; // evita pan
  this.activeGroup = beamGroup;
  this.selectGroup(beamGroup)
});

    this.camera.add(beamGroup);

    const width = imageObj.width;
    const height = imageObj.height;

    let xPos: number;
    let yPos: number;
    let index = 0;

    // ---------- SUPERIORES (8) ----------
    const topPositions = [
      26.5,
      26.5 + 145.5,
      26.5 + 311,
      26.5 + 476.5,
      width - 26.5,
      width - 26.5 - 145.5,
      width - 26.5 - 311,
      width - 26.5 - 476.5,
    ];

    yPos = -height / 3;

    topPositions.forEach((offset, i) => {
      xPos = offset - width / 2;

      const terminal: BeamTerminal = {
        id: crypto.randomUUID(),
        ownerId: beamId,
        ownerType: 'BEAM',
        type: 'TOP',
        index: i,
        localX: xPos,
        localY: yPos,
      };
      terminals.push(terminal);
      beamGroup.add(this.createTerminal(xPos, yPos, terminal));
;
    });

    // ---------- INFERIORES (11) ----------
    const bottomPositions = [
      26.5,
      26.5 + 145.5,
      26.5 + 311,
      26.5 + 476.5,
      26.5 + 642,
      26.5 + 807.5,
      width - 26.5,
      width - 26.5 - 145.5,
      width - 26.5 - 311,
      width - 26.5 - 476.5,
      width - 26.5 - 642,
    ];

    yPos = height / 3;

    bottomPositions.forEach((offset, i) => {
      xPos = offset - width / 2;

      const terminal: BeamTerminal = {
        id: crypto.randomUUID(),
        ownerId: beamId,
        ownerType: 'BEAM',
        type: 'BOTTOM',
        index: i,
        localX: xPos,
        localY: yPos,
      };
      console.log(i, terminal.type);
      terminals.push(terminal);
      beamGroup.add(this.createTerminal(xPos, yPos, terminal));
;
    });

    // 🔹 Registrar beam completo
    this.beams.push({
      id: beamId,
      group: beamGroup,
      terminals,
    });

    this.layer.draw();
    //console.log(this.beams[0]);
  };
  

}


snapToGrid(value: number): number {
    return Math.round(value / this.gridSize) * this.gridSize;
}

createTerminal(
  x: number,
  y: number,
  terminal: BeamTerminal
) {
  const circle = new Konva.Circle({
    x,
    y,
    radius: 5,
    fill: '#fa1515ff',
    stroke: '#000',
    strokeWidth: 1,
    listening: true,
  });

  circle.setAttr('terminalId', terminal.id);

  // Hover
  circle.on('mouseenter', () => {
    document.body.style.cursor = 'crosshair';
    circle.radius(10);
    circle.fill('#fa1515ff');
    this.layer.batchDraw();
  });

  circle.on('mouseleave', () => {
    if (this.activeTerminal?.id !== terminal.id) {
      document.body.style.cursor = 'default';
      circle.radius(5);
      circle.fill('#fa1515ff');
      this.layer.batchDraw();
    }
  });

  // CLICK → iniciar conexión
  circle.on('click', () => {

  // Si NO hay conexión activa → iniciar
  if (!this.activeTerminal) {
    this.startConnection(terminal, circle);
    return;
  }

  // Si YA hay conexión activa → intentar cerrar
  this.finishConnection(terminal);

});


  return circle;
}


  createTerminalVisual(x: number, y: number) {
  return new Konva.Circle({
    x,
    y,
    radius: 5,
    fill: '#22c55e',
    stroke: '#000',
    strokeWidth: 1,
    listening: false,
  });
  
}
rotateBeam(beamId: string, direction: 'CW' | 'CCW') {
  const beam = this.beams.find(b => b.id === beamId);
  if (!beam) return;

  const currentRotation = beam.group.rotation();
  const delta =
    direction === 'CW'
      ? this.rotationStep
      : -this.rotationStep;

  const newRotation = currentRotation + delta;

  beam.group.rotation(newRotation);
  this.updateConnections(); 
  this.layer.batchDraw();
}

startConnection(terminal: BeamTerminal, shape: Konva.Circle) {
  this.activeTerminal = terminal;
  this.activeTerminalShape = shape;

  shape.fill('#22c55e');
  shape.radius(10);

  this.layer.batchDraw();
}


addCraneHook(x = 0, y = 0) {
  const craneHookId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];
  const SCALE = 0.2; 


  const imageObj = new Image();
  imageObj.src = 'assets/hooks/crane-hook.png';

  imageObj.onload = () => {
    const craneHookGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: craneHookId,
    });

    const craneHookImage = new Konva.Image({
  image: imageObj,
  x: 0,
  y: 0,
  scaleX: SCALE,
  scaleY: SCALE,
});


    // Centramos la imagen
    craneHookImage.offsetX((imageObj.width * SCALE) / 2);
    craneHookImage.offsetY((imageObj.height * SCALE) / 2);


    craneHookGroup.add(craneHookImage);

    const width = imageObj.width;
    const height = imageObj.height;
    const scaledHeight = imageObj.height * SCALE;
    // ---------- TERMINAL SUPERIOR ----------
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: craneHookId,
      ownerType: 'CRANEHOOK',
      type: 'TOP',
      index: 0,
      localX: 65,
      localY: scaledHeight / 2 + 15, // ajuste fino después
    };

    terminals.push(topTerminal);
    craneHookGroup.add(
      this.createTerminal(
        topTerminal.localX,
        topTerminal.localY,
        topTerminal
      )
    );

    // ---------- TERMINAL INFERIOR ----------
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: craneHookId,
      ownerType: 'CRANEHOOK',
      type: 'BOTTOM',
      index: 0,
      localX: 105,
      localY: scaledHeight / 2 + 15, // centro del gancho
    };

    terminals.push(bottomTerminal);
    craneHookGroup.add(
      this.createTerminal(
        bottomTerminal.localX,
        bottomTerminal.localY,
        bottomTerminal
      )
    );

    // Snap al soltar
    craneHookGroup.on('dragend', () => {
      craneHookGroup.position({
        x: this.snapToGrid(craneHookGroup.x()),
        y: this.snapToGrid(craneHookGroup.y()),
      });
      this.layer.batchDraw();
    });
    
    craneHookGroup.on('dragmove', () => {
      this.updateConnections();
    });
    craneHookGroup.on('click', e => {
      e.cancelBubble = true; // evita pan
      this.activeGroup = craneHookGroup;
      this.selectGroup(craneHookGroup)
    });

    this.camera.add(craneHookGroup);

    this.craneHooks.push({
      id: craneHookId,
      group: craneHookGroup,
      terminals,
    });

    this.layer.draw();
    
  };
  
}
addSling(x = 0, y = 0) {
  const slingId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];

  const SCALE = 0.3;

  const imageObj = new Image();
  imageObj.src = 'assets/slings/sling-yellow.png';

  imageObj.onload = () => {
    const slingGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: slingId,
    });

    const slingImage = new Konva.Image({
      image: imageObj,
      x: 0,
      y: 0,
      offsetY: imageObj.height / 2,
      scaleY: SCALE,
      scaleX: SCALE,
    });

    slingGroup.add(slingImage);

    // 🔹 altura visual real
    const visualHeight = imageObj.height * SCALE;

    // =========================
    // TERMINAL SUPERIOR
    // =========================
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: slingId,
      ownerType: 'SLING',
      type: 'TOP',
      index: 0,
      localX: 50,
      localY: 0,
    };

    const topCircle = this.createTerminal(
      topTerminal.localX,
      topTerminal.localY,
      topTerminal
    );

    slingGroup.add(topCircle);
    terminals.push(topTerminal);

    // =========================
    // TERMINAL INFERIOR
    // =========================
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: slingId,
      ownerType: 'SLING',
      type: 'BOTTOM',
      index: 1,
      localX: 420,
      localY: 0,
    };

    const bottomCircle = this.createTerminal(
      bottomTerminal.localX,
      bottomTerminal.localY,
      bottomTerminal
    );

    slingGroup.add(bottomCircle);
    terminals.push(bottomTerminal);
      slingGroup.on('dragmove', () => {
    this.updateConnections();
  });

  slingGroup.on('click', e => {
  e.cancelBubble = true; // evita pan
  this.activeGroup = slingGroup;
  this.selectGroup(slingGroup)
});

    // =========================

    this.camera.add(slingGroup);
    this.layer.batchDraw();

    this.slings.push({
      id: slingId,
      group: slingGroup,
      terminals,
    });
  };

}


canConnect(a: BeamTerminal, b: BeamTerminal): boolean {
  // mismo terminal
  if (a.id === b.id) return false;

  // mismo elemento
  if (a.ownerId === b.ownerId) return false;

  // mismo tipo (TOP–TOP o BOTTOM–BOTTOM)
  //if (a.type === b.type) return false;

  // reglas por tipo de elemento
  if (a.ownerType === 'CRANEHOOK' && b.ownerType === 'SLING') return true;
  if (a.ownerType === 'SLING' && b.ownerType === 'CRANEHOOK') return true;

  if (a.ownerType === 'BEAM' && b.ownerType === 'SHACKLE') return true;
  if (a.ownerType === 'SHACKLE' && b.ownerType === 'BEAM') return true;

  if (a.ownerType === 'SLING' && b.ownerType === 'SHACKLE') return true;
  if (a.ownerType === 'SHACKLE' && b.ownerType === 'SLING') return true;

  if (a.ownerType === 'WIRE' && b.ownerType === 'SHACKLE') return true;
  if (a.ownerType === 'SHACKLE' && b.ownerType === 'WIRE') return true;

  if (a.ownerType === 'RING' && b.ownerType === 'SHACKLE') return true;
  if (a.ownerType === 'SHACKLE' && b.ownerType === 'RING') return true;

  if (a.ownerType === 'LINKCHAIN' && b.ownerType === 'CHAIN') return true;
  if (a.ownerType === 'CHAIN' && b.ownerType === 'LINKCHAIN') return true;

  if (a.ownerType === 'LINKCHAIN' && b.ownerType === 'RING') return true;
  if (a.ownerType === 'RING' && b.ownerType === 'LINKCHAIN') return true;

  if (a.ownerType === 'LINKCHAIN' && b.ownerType === 'HOOK') return true;
  if (a.ownerType === 'HOOK' && b.ownerType === 'LINKCHAIN') return true;

  if (a.ownerType === 'SLING' && b.ownerType === 'HOOK') return true;
  if (a.ownerType === 'HOOK' && b.ownerType === 'SLING') return true;

  if (a.ownerType === 'WIRE' && b.ownerType === 'HOOK') return true;
  if (a.ownerType === 'HOOK' && b.ownerType === 'WIRE') return true;

  if (a.ownerType === 'CRANEHOOK' && b.ownerType === 'WIRE') return true;
  if (a.ownerType === 'WIRE' && b.ownerType === 'CRANEHOOK') return true;

  if (a.ownerType === 'CRANEHOOK' && b.ownerType === 'RING') return true;
  if (a.ownerType === 'RING' && b.ownerType === 'CRANEHOOK') return true;
  
  return false;
}

finishConnection(target: BeamTerminal) {
  
  if (!this.activeTerminal) return;

  const source = this.activeTerminal;

  if (!this.canConnect(source, target)) {
    this.resetActiveTerminal();
    return;
  }
  // validaciones (ya las tenés)
  if (source.id === target.id) return this.resetActiveTerminal();
  if (source.ownerId === target.ownerId) return this.resetActiveTerminal();
  //if (source.type === target.type) return this.resetActiveTerminal();

  const p1 = this.getTerminalWorldPosition(source);
  const p2 = this.getTerminalWorldPosition(target);

  const line = new Konva.Line({
    points: [p1.x, p1.y, p2.x, p2.y],
    stroke: '#22c55e',
    strokeWidth: 3,
    listening: false,
  });

  this.layer.add(line);

  this.connections.push({
    id: crypto.randomUUID(),
    from: source,
    to: target,
    shape: line,
  });

  this.layer.batchDraw();
  this.resetActiveTerminal();
}



getTerminalAbsPosition(terminal: BeamTerminal): { x: number; y: number } {
  const group = this.findGroupByOwnerId(terminal.ownerId);
  if (!group) return { x: 0, y: 0 };

  const point = group.getAbsoluteTransform().point({
    x: terminal.localX,
    y: terminal.localY,
  });

  return point;
}

findGroupByOwnerId(ownerId: string): Konva.Group | null {
  return (
    this.beams.find(b => b.id === ownerId)?.group ||
    this.craneHooks.find(ch => ch.id === ownerId)?.group ||
    this.slings.find(s => s.id === ownerId)?.group ||
    this.wires.find(w => w.id === ownerId)?.group ||
    this.rings.find(r => r.id === ownerId)?.group ||
    this.shackles.find(sh => sh.id === ownerId)?.group ||
    this.linkChains.find(lc => lc.id === ownerId)?.group ||
    this.hooks.find(h => h.id === ownerId)?.group ||
    null
  );
}

cancelActiveConnection() {
  if (this.activeLine) {
    this.activeLine.destroy();
    this.activeLine = null;
  }

  this.activeTerminal = null;
  this.stage.off('mousemove.activeConnection');
  document.body.style.cursor = 'default';
  this.layer.batchDraw();
}

updateConnection(_connection: Connection) {
  // TODO: futuras validaciones físicas
}

resetActiveTerminal() {
  if (this.activeTerminalShape) {
    this.activeTerminalShape.fill('#22c55e');
    this.activeTerminalShape.radius(5);
  }

  this.activeTerminal = null;
  this.activeTerminalShape = null;

  this.layer.batchDraw();
}
getTerminalWorldPosition(terminal: BeamTerminal): { x: number; y: number } {
  const group = this.findGroupByOwnerId(terminal.ownerId);
  if (!group) throw new Error('Group not found');

  return group.getAbsoluteTransform().point({
    x: terminal.localX,
    y: terminal.localY,
  });
}

updateConnections() {
  this.connections.forEach(conn => {
    const p1 = this.getTerminalWorldPosition(conn.from);
    const p2 = this.getTerminalWorldPosition(conn.to);

    if (conn.shape instanceof Konva.Line) {
      conn.shape.points([p1.x, p1.y, p2.x, p2.y]);
    }
  });

  this.layer.batchDraw();
  this.updateSelectionVisual();

}
scaleElement(
  group: Konva.Group,
  factor: number
) {
  const currentScale = group.scaleX();
  const newScale = currentScale * factor;

  group.scale({
    x: newScale,
    y: newScale,
  });

  this.updateConnections();
  this.layer.batchDraw();
}
selectGroup(group: Konva.Group) {
  // limpiar selección previa
  this.clearSelection();

  this.selectedGroup = group;

  const box = group.getClientRect({ skipTransform: false });

  this.selectionRect = new Konva.Rect({
    x: box.x - 6,
    y: box.y - 6,
    width: box.width + 12,
    height: box.height + 12,
    stroke: '#22c55e',
    strokeWidth: 2,
    dash: [6, 4],
    listening: false,
  });

  this.layer.add(this.selectionRect);
  this.layer.batchDraw();
}
clearSelection() {
  if (this.selectionRect) {
    this.selectionRect.destroy();
    this.selectionRect = null;
  }

  this.selectedGroup = null;
  this.layer.batchDraw();
}
updateSelectionVisual() {
  if (!this.selectedGroup || !this.selectionRect) return;

  const box = this.selectedGroup.getClientRect({ skipTransform: false });

  this.selectionRect.position({
    x: box.x - 6,
    y: box.y - 6,
  });

  this.selectionRect.size({
    width: box.width + 12,
    height: box.height + 12,
  });
}
// addElement(type: ElementType) {
//   const x = 0;
//   const y = 0;

//   switch (type) {
//     case 'BEAM':
//       this.addBeam(x, y);
//       break;
//     // case 'CRANEHOOK':
//     //   this.addCraneHook(x, y);
//     //   break;
//     // case 'SLING':
//     //   this.addSling(x, y);
//     //   break;
//   }
// }

addChain(x = 0, y = 0) {
  const chainId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];

  const SCALE = 0.6;

  const imageObj = new Image();
  imageObj.src = 'assets/chains/chain.png';

  imageObj.onload = () => {
    const chainGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: chainId,
    });

    const chainImage = new Konva.Image({
      image: imageObj,
      x: 0,
      y: 0,
      offsetY: imageObj.height / 2,
      scaleY: SCALE,
      scaleX: SCALE,
    });

    chainGroup.add(chainImage);

    // 🔹 altura visual real
    const visualHeight = imageObj.height * SCALE;

    // =========================
    // TERMINAL SUPERIOR
    // =========================
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: chainId,
      ownerType: 'CHAIN',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 ,
      localY: -(imageObj.height * SCALE) / 2 + 12,
    };

    const topCircle = this.createTerminal(
      topTerminal.localX,
      topTerminal.localY,
      topTerminal
    );

    chainGroup.add(topCircle);
    terminals.push(topTerminal);

    // =========================
    // TERMINAL INFERIOR
    // =========================
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: chainId,
      ownerType: 'CHAIN',
      type: 'BOTTOM',
      index: 1,
      localX: (imageObj.width * SCALE) / 2 ,
      localY: (imageObj.height * SCALE) / 2 - 26,
    };

    const bottomCircle = this.createTerminal(
      bottomTerminal.localX,
      bottomTerminal.localY,
      bottomTerminal
    );

    chainGroup.add(bottomCircle);
    terminals.push(bottomTerminal);
      chainGroup.on('dragmove', () => {
    this.updateConnections();
  });

  chainGroup.on('click', e => {
  e.cancelBubble = true; // evita pan
  this.activeGroup = chainGroup;
  this.selectGroup(chainGroup)
});

    // =========================

    this.camera.add(chainGroup);
    this.layer.batchDraw();

    this.slings.push({
      id: chainId,
      group: chainGroup,
      terminals,
    });
  };

}

addShackle(x = 0, y = 0) {
  const shackleId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];
  const SCALE = 0.15; 


  const imageObj = new Image();
  imageObj.src = 'assets/shackles/shackle.png';

  imageObj.onload = () => {
    const shackleGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: shackleId,
    });

    const shackleImage = new Konva.Image({
  image: imageObj,
  x: 0,
  y: 0,
  scaleX: SCALE,
  scaleY: SCALE,
});


    // Centramos la imagen
    shackleImage.offsetX((imageObj.width * SCALE) / 2);
    shackleImage.offsetY((imageObj.height * SCALE) / 2);


    shackleGroup.add(shackleImage);

    const width = imageObj.width;
    const height = imageObj.height;
    const scaledHeight = imageObj.height * SCALE;
    // ---------- TERMINAL SUPERIOR ----------
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: shackleId,
      ownerType: 'SHACKLE',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 10,
      localY: -(imageObj.height * SCALE) / 2 + 90,
    };

    terminals.push(topTerminal);
    shackleGroup.add(
      this.createTerminal(
        topTerminal.localX,
        topTerminal.localY,
        topTerminal
      )
    );

    // ---------- TERMINAL INFERIOR ----------
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: shackleId,
      ownerType: 'SHACKLE',
      type: 'BOTTOM',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 10,
      localY: (imageObj.height * SCALE) / 2 + 20,
    };

    terminals.push(bottomTerminal);
    shackleGroup.add(
      this.createTerminal(
        bottomTerminal.localX,
        bottomTerminal.localY,
        bottomTerminal
      )
    );

    // Snap al soltar
    shackleGroup.on('dragend', () => {
      shackleGroup.position({
        x: this.snapToGrid(shackleGroup.x()),
        y: this.snapToGrid(shackleGroup.y()),
      });
      this.layer.batchDraw();
    });
    
    shackleGroup.on('dragmove', () => {
      this.updateConnections();
    });
    shackleGroup.on('click', e => {
      e.cancelBubble = true; // evita pan
      this.activeGroup = shackleGroup;
      this.selectGroup(shackleGroup)
    });

    this.camera.add(shackleGroup);

    this.shackles.push({
      id: shackleId,
      group: shackleGroup,
      terminals,
    });

    this.layer.draw();
    
  };
  
}
addWire(x = 0, y = 0) {
  const wireId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];

  const SCALE = 0.6;

  const imageObj = new Image();
  imageObj.src = 'assets/slings/wire-sling.png';

  imageObj.onload = () => {
    const wireGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: wireId,
    });

    const chainImage = new Konva.Image({
      image: imageObj,
      x: 0,
      y: 0,
      offsetY: imageObj.height / 2,
      scaleY: SCALE,
      scaleX: SCALE,
    });

    wireGroup.add(chainImage);

    // 🔹 altura visual real
    const visualHeight = imageObj.height * SCALE;

    // =========================
    // TERMINAL SUPERIOR
    // =========================
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: wireId,
      ownerType: 'WIRE',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 ,
      localY: -(imageObj.height * SCALE) / 2 + 35,
    };

    const topCircle = this.createTerminal(
      topTerminal.localX,
      topTerminal.localY,
      topTerminal
    );

    wireGroup.add(topCircle);
    terminals.push(topTerminal);

    // =========================
    // TERMINAL INFERIOR
    // =========================
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: wireId,
      ownerType: 'WIRE',
      type: 'BOTTOM',
      index: 1,
      localX: (imageObj.width * SCALE) / 2 ,
      localY: (imageObj.height * SCALE) / 2 - 33,
    };

    const bottomCircle = this.createTerminal(
      bottomTerminal.localX,
      bottomTerminal.localY,
      bottomTerminal
    );

    wireGroup.add(bottomCircle);
    terminals.push(bottomTerminal);
      wireGroup.on('dragmove', () => {
    this.updateConnections();
  });

  wireGroup.on('click', e => {
  e.cancelBubble = true; // evita pan
  this.activeGroup = wireGroup;
  this.selectGroup(wireGroup)
});

    // =========================

    this.camera.add(wireGroup);
    this.layer.batchDraw();

    this.wires.push({
      id: wireId,
      group: wireGroup,
      terminals,
    });
  };
}

addRing(x = 0, y = 0) {
  const ringId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];
  const SCALE = 0.5; 


  const imageObj = new Image();
  imageObj.src = 'assets/connectors/ring.png';

  imageObj.onload = () => {
    const ringGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: ringId,
    });

    const ringImage = new Konva.Image({
  image: imageObj,
  x: 0,
  y: 0,
  scaleX: SCALE,
  scaleY: SCALE,
});


    // Centramos la imagen
    ringImage.offsetX((imageObj.width * SCALE) / 2);
    ringImage.offsetY((imageObj.height * SCALE) / 2);


    ringGroup.add(ringImage);

    const width = imageObj.width;
    const height = imageObj.height;
    const scaledHeight = imageObj.height * SCALE;
    // ---------- TERMINAL SUPERIOR ----------
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: ringId,
      ownerType: 'RING',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 39,
      localY: -(imageObj.height * SCALE) / 2 + 35,
    };

    terminals.push(topTerminal);
    ringGroup.add(
      this.createTerminal(
        topTerminal.localX,
        topTerminal.localY,
        topTerminal
      )
    );

    // ---------- TERMINAL INFERIOR ----------
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: ringId,
      ownerType: 'RING',
      type: 'BOTTOM',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 39,
      localY: (imageObj.height * SCALE) / 2 + 5,
    };

    terminals.push(bottomTerminal);
    ringGroup.add(
      this.createTerminal(
        bottomTerminal.localX,
        bottomTerminal.localY,
        bottomTerminal
      )
    );

    // Snap al soltar
    ringGroup.on('dragend', () => {
      ringGroup.position({
        x: this.snapToGrid(ringGroup.x()),
        y: this.snapToGrid(ringGroup.y()),
      });
      this.layer.batchDraw();
    });
    
    ringGroup.on('dragmove', () => {
      this.updateConnections();
    });
    ringGroup.on('click', e => {
      e.cancelBubble = true; // evita pan
      this.activeGroup = ringGroup;
      this.selectGroup(ringGroup)
    });

    this.camera.add(ringGroup);

    this.rings.push({
      id: ringId,
      group: ringGroup,
      terminals,
    });

    this.layer.draw();
    
  };
  
}

addLinkChain(x = 0, y = 0) {
  const linkChainId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];
  const SCALE = 0.08; 


  const imageObj = new Image();
  imageObj.src = 'assets/connectors/link.png';

  imageObj.onload = () => {
    const linkChainGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: linkChainId,
    });

    const linkChainImage = new Konva.Image({
  image: imageObj,
  x: 0,
  y: 0,
  scaleX: SCALE,
  scaleY: SCALE,
});


    // Centramos la imagen
    linkChainImage.offsetX((imageObj.width * SCALE) / 2);
    linkChainImage.offsetY((imageObj.height * SCALE) / 2);


    linkChainGroup.add(linkChainImage);

    const width = imageObj.width;
    const height = imageObj.height;
    const scaledHeight = imageObj.height * SCALE;
    // ---------- TERMINAL SUPERIOR ----------
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: linkChainId,
      ownerType: 'LINKCHAIN',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 2,
      localY: -(imageObj.height * SCALE) / 2 + 35,
    };

    terminals.push(topTerminal);
    linkChainGroup.add(
      this.createTerminal(
        topTerminal.localX,
        topTerminal.localY,
        topTerminal
      )
    );

    // ---------- TERMINAL INFERIOR ----------
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: linkChainId,
      ownerType: 'LINKCHAIN',
      type: 'BOTTOM',
      index: 0,
      localX: (imageObj.width * SCALE) / 2 - 2,
      localY: (imageObj.height * SCALE) / 2 + 5,
    };

    terminals.push(bottomTerminal);
    linkChainGroup.add(
      this.createTerminal(
        bottomTerminal.localX,
        bottomTerminal.localY,
        bottomTerminal
      )
    );

    // Snap al soltar
    linkChainGroup.on('dragend', () => {
      linkChainGroup.position({
        x: this.snapToGrid(linkChainGroup.x()),
        y: this.snapToGrid(linkChainGroup.y()),
      });
      this.layer.batchDraw();
    });
    
    linkChainGroup.on('dragmove', () => {
      this.updateConnections();
    });
    linkChainGroup.on('click', e => {
      e.cancelBubble = true; // evita pan
      this.activeGroup = linkChainGroup;
      this.selectGroup(linkChainGroup)
    });

    this.camera.add(linkChainGroup);

    this.linkChains.push({
      id: linkChainId,
      group: linkChainGroup,
      terminals,
    });

    this.layer.draw();
    
  };
  
}
addHook(x = 0, y = 0) {
  const hookId = crypto.randomUUID();
  const terminals: BeamTerminal[] = [];
  const SCALE = 0.2; 


  const imageObj = new Image();
  imageObj.src = 'assets/hooks/hook.png';

  imageObj.onload = () => {
    const hookGroup = new Konva.Group({
      x,
      y,
      draggable: true,
      id: hookId,
    });

    const hookImage = new Konva.Image({
  image: imageObj,
  x: 0,
  y: 0,
  scaleX: SCALE,
  scaleY: SCALE,
});


    // Centramos la imagen
    hookImage.offsetX((imageObj.width * SCALE) / 2);
    hookImage.offsetY((imageObj.height * SCALE) / 2);


    hookGroup.add(hookImage);

    const width = imageObj.width;
    const height = imageObj.height;
    const scaledHeight = imageObj.height * SCALE;
    // ---------- TERMINAL SUPERIOR ----------
    const topTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: hookId,
      ownerType: 'HOOK',
      type: 'TOP',
      index: 0,
      localX: (imageObj.width * SCALE)/2 - 8.5,
      localY: -(imageObj.height * SCALE)/2 + 52, // ajuste fino después
    };

    terminals.push(topTerminal);
    hookGroup.add(
      this.createTerminal(
        topTerminal.localX,
        topTerminal.localY,
        topTerminal
      )
    );

    // ---------- TERMINAL INFERIOR ----------
    const bottomTerminal: BeamTerminal = {
      id: crypto.randomUUID(),
      ownerId: hookId,
      ownerType: 'HOOK',
      type: 'BOTTOM',
      index: 0,
      localX: (imageObj.width * SCALE)/2 - 12,
      localY: (imageObj.height * SCALE)/2 + 15, // centro del gancho
    };

    terminals.push(bottomTerminal);
    hookGroup.add(
      this.createTerminal(
        bottomTerminal.localX,
        bottomTerminal.localY,
        bottomTerminal
      )
    );

    // Snap al soltar
    hookGroup.on('dragend', () => {
      hookGroup.position({
        x: this.snapToGrid(hookGroup.x()),
        y: this.snapToGrid(hookGroup.y()),
      });
      this.layer.batchDraw();
    });
    
    hookGroup.on('dragmove', () => {
      this.updateConnections();
    });
    hookGroup.on('click', e => {
      e.cancelBubble = true; // evita pan
      this.activeGroup = hookGroup;
      this.selectGroup(hookGroup)
    });

    this.camera.add(hookGroup);

    this.hooks.push({
      id: hookId,
      group: hookGroup,
      terminals,
    });

    this.layer.draw();
    
  };
  
}

deleteSelected() {
  
  if (this.activeTerminal) {
  this.resetActiveTerminal();}

  if (!this.selectedGroup) return;

  const group = this.selectedGroup;
  const id = group.id();

  // 1️⃣ eliminar conexiones asociadas
  this.connections = this.connections.filter(conn => {
    const involved =
      conn.from.ownerId === id || conn.to.ownerId === id;

    if (involved) {
      conn.shape.destroy();
    }

    return !involved;
  });

  // 2️⃣ eliminar de los arrays lógicos
  this.beams = this.beams.filter(b => b.id !== id);
  this.slings = this.slings.filter(s => s.id !== id);
  this.craneHooks = this.craneHooks.filter(h => h.id !== id);
  this.hooks = this.hooks.filter(h => h.id !== id);
  this.wires = this.wires.filter(w => w.id !== id);
  this.rings = this.rings.filter(r => r.id !== id);
  this.shackles = this.shackles.filter(s => s.id !== id);
  this.linkChains = this.linkChains.filter(l => l.id !== id);

  // 3️⃣ destruir el group visual
  group.destroy();

  // 4️⃣ limpiar selección
  this.clearSelection();
  this.activeGroup = null;

  this.layer.batchDraw();
}

}
