import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Header } from '../interfaces/header.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private header$ = new BehaviorSubject<Header | null>(null);

  setHeader(header: Header) {
    this.header$.next(header);
  }

  getHeader() {
    return this.header$.asObservable();
  }

  getHeaderSnapshot(): Header | null {
    return this.header$.value;
  }

  hasProject(): boolean {
    return this.header$.value !== null;
  }

  clear() {
    this.header$.next(null);
  }
}

