import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CanvasSling } from '../interfaces/sling.interface';

@Injectable({ providedIn: 'root' })
export class SlingPanelService {

  private openSubject = new BehaviorSubject<CanvasSling | undefined>(undefined);

  open$ = this.openSubject.asObservable();

  open(sling: CanvasSling) {
    this.openSubject.next(sling);
  }

close() {
  this.openSubject.next(undefined);
}

}
