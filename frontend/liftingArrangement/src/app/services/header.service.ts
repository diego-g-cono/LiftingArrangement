import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Header } from '../interfaces/header.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {

  private apiUrl = 'http://localhost:8080/headers';

  private open$ = new Subject<void>();
  private confirm$ = new Subject<Header>();

  private headerSubject = new BehaviorSubject<Header | null>(null);

  openDialog$ = this.open$.asObservable();
  confirmed$ = this.confirm$.asObservable();
  header$ = this.headerSubject.asObservable();

  constructor(private http: HttpClient) {}

  // DIALOG
  open() {
    this.open$.next();
  }

  confirm(header: Header) {
    this.headerSubject.next(header);
    this.confirm$.next(header);
  }

  close() {}

  // STATE
  get current(): Header | null {
    console.log(this.headerSubject.value);
    return this.headerSubject.value;
  }

  set(header: Header) {
    this.headerSubject.next(header);
  }
  
  // API
  create(header: Header) {
    return this.http.post<Header>(this.apiUrl, header);
  }

  getAll() {
    return this.http.get<Header[]>(this.apiUrl);
  }
}
