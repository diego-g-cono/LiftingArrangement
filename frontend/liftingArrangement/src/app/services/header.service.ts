import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Header } from '../interfaces/header.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private apiUrl = 'http://localhost:8080/headers';
  private open$ = new Subject<void>();
  private confirm$ = new Subject<Header>();

  openDialog$ = this.open$.asObservable();
  confirmed$ = this.confirm$.asObservable();
  constructor(private http: HttpClient) {}

  open() {
    this.open$.next();
  }

  confirm(header: Header) {
    this.confirm$.next(header);
  }
  
  create(header: Header) {
    return this.http.post<Header>(this.apiUrl, header);
  }

  /** (para más adelante) */
  getAll() {
    return this.http.get<Header[]>(this.apiUrl);
  }

  close() {}

}

