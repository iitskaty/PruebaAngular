import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Autores {
  id_autor?: number;
  nombre: string;
  nacionalidad: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiUrl = 'https://apiclases.inacode.cl/apiIOTBE/clientes';
  constructor(private http: HttpClient) { }

  obtenerAutoress(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  AutorID(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  CrearAutor(autor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, autor);
  }

  ActualizarAutor(id: number, autor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, autor);
  }

  BrorrarAutor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}