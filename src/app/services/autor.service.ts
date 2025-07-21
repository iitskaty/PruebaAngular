import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Autor {
  id: number;
  nombre: string;
  nacionalidad?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private apiUrl = 'https://apiclases.inacode.cl/apiIOTBE/autores'; // Ajusta la URL

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  crearAutor(autor: Autor): Observable<any> {
    return this.http.post(this.apiUrl, autor);
  }

  actualizarAutor(id: number, autor: Autor): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, autor);
  }

  borrarAutor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
