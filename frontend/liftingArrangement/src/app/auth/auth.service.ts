import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly ACCESS_TOKEN = 'access_token';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>('http://localhost:8080/auth/login', data)
      .pipe(
        tap(res => {
          localStorage.setItem(this.ACCESS_TOKEN, res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getRole(): string | null {
  const token = this.getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    // ⚠️ Ajustar según cómo generes el JWT en backend
    return payload.role || payload.authorities?.[0]?.authority || null;

  } catch (error) {
    return null;
  }
}

isAdmin(): boolean {
  return this.getRole() === 'ROLE_ADMIN';
}
}
