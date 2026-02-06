import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private selected$ = new BehaviorSubject<any | null>(null);

  select(element: any) {
    this.selected$.next(element);
  }

  clear() {
    this.selected$.next(null);
  }

  get selection$() {
    return this.selected$.asObservable();
  }
}

