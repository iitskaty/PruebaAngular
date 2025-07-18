import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { libros } from "../pages/libros";

@Injectable({
    providedIn:'root'
})
export class LibrosService{
    private apiUrl = 'http:/C:\Users\katyn\Downloads\PruebaAngular-PruebasCodigo\PruebaAngular-PruebasCodigo\backend\routes\bibliotecadigital.js'

    constructor(private http: HttpClient)
    {}
    obtenerLibros():Observable<any>{
    return this.http.get(this.apiUrl);
    }

    crearLibros(Libros:any):
    Observable<any> {
    return this.http.post(this.apiUrl,Libros);
    }
    actualizarLibros(id:number,libros:any):
    Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`,libros);
    }
    eliminarLibros(id:number, libros:any):
    Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    buscarlibro(titulo:string):
    Observable<libros|null> {
        return this.http.get<libros|null>(`${this.apiUrl}/buscar?titulo=$`);
    }
}






