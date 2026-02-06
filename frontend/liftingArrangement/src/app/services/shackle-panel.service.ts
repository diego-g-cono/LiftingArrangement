import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CanvasShackle } from '../interfaces/shackle.interface';

@Injectable({ providedIn: 'root' })
export class ShacklePanelService {

  private openSubject = new Subject<CanvasShackle>();
  open$ = this.openSubject.asObservable();

  open(shackle: CanvasShackle) {
    this.openSubject.next(shackle);
  }
}


