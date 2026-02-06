import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../interfaces/user.dto';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'http://localhost:8080/users';
  private users: UserDto[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserDto[]>(this.api);
  }

    getById(id: number): UserDto | undefined {
      return this.users.find(u => u.id === id);
    }
}

