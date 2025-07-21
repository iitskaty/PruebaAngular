import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { libros } from '../pages/libros-component/libros'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:3000/libros'; 

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<libros[]> {
    return this.http.get<libros[]>(this.apiUrl);
  }

  buscarlibro(nombre: string): Observable<libros | null> {
    return this.http.get<libros | null>(`${this.apiUrl}?titulo=${nombre}`);
  }

  agregarlibro(libro: libros): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  actualizarlibro(libro: libros): Observable<any> {
    return this.http.put(`${this.apiUrl}/${libro.id}`, libro);
  }

  eliminarlibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
