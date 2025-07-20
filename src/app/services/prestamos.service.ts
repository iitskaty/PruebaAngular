import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../pages/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  private apiUrl = 'https://apiclases.inacode.cl/apiIOTBE/clientes/prestamos'; 

  constructor(private http: HttpClient) {}

  obtenerPrestamos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearPrestamo(prestamo: any): Observable<any> {
    return this.http.post(this.apiUrl, prestamo);
  }

  actualizarPrestamo(id: number, prestamo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, prestamo);
  }

  eliminarPrestamo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  buscarPrestamo(id: number): Observable<Prestamo | null> {
    return this.http.get<Prestamo | null>(`${this.apiUrl}/buscar?id=${id}`);
  }
}
