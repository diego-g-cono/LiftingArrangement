import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShackleDto } from '../interfaces/shackle.dto';

@Injectable({ providedIn: 'root' })
export class ShackleApiService {
  private api = 'http://localhost:8080/shackles'
  private shackles: ShackleDto[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ShackleDto[]>(this.api);
  }

  getById(id: number): ShackleDto | undefined {
      return this.shackles.find(s => s.id === id);
  }
}

