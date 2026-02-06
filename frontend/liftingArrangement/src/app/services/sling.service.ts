import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SlingDto } from '../interfaces/sling.dto';

@Injectable({ providedIn: 'root' })
export class SlingService {
  private api = 'http://localhost:8080/webbingSlings'
  private shackles: SlingDto[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<SlingDto[]>(this.api);
  }

  getById(id: number): SlingDto | undefined {
      return this.shackles.find(s => s.id === id);
  }
}
