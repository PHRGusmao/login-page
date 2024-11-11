import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UserProfile } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  apiURL: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  profile() {
    const token = sessionStorage.getItem('auth-token');

    // Configura o cabeçalho com o token Bearer
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Usando GET agora, com headers e sem corpo
    return this.httpClient.get<UserProfile>(`${this.apiURL}/user`, { headers }).pipe(
      tap((value) => {
        console.log("Response received:", value); // Deve exibir 'Hello World' se tudo estiver correto
      })
    );
  }
}
