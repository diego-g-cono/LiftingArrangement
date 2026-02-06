import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeamDto } from '../interfaces/beam.dto';

@Injectable({ providedIn: 'root' })
export class BeamService {
  private api = 'http://localhost:8080/beams';
  private beams: BeamDto[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<BeamDto[]>(this.api);
  }

  getById(id: number): BeamDto | undefined {
    return this.beams.find(b => b.id === id);
  }
  
}




