import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { AutoresService } from '../../services/autor.service';
import { libros } from './libros';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  // 🔍 Búsqueda por título
  nombreBuscado: string = '';
  libroEncontrado: libros | null = null;
  libroNoEncontrado: boolean = false;
  busquedaRealizada: boolean = false;

  // 📚 Crear y editar
  libroNuevo: libros = {
    id: 0,
    titulo: '',
    id_autor: 0
  };

  modoEdicion: boolean = false;

  // 📋 Listado general
  librosEncontrados: libros[] = [];
  autoresDisponibles: any[] = [];

  constructor(
    private librosService: LibrosService,
    private autoresService: AutoresService // ← Asegúrate de inyectarlo
  ) {
    this.obtenerLibros();
    this.obtenerAutores(); // ← Cargar autores al iniciar
  }

  buscarLibro(): void {
    this.librosService.buscarlibro(this.nombreBuscado).subscribe(
      (libro: any) => {
        if (libro) {
          this.libroEncontrado = libro;
          this.libroNoEncontrado = false;
        } else {
          this.libroEncontrado = null;
          this.libroNoEncontrado = true;
        }
      },
      (error: any) => {
        this.libroEncontrado = null;
        this.libroNoEncontrado = true;
      }
    );
  }

  guardarLibro(): void {
    if (this.modoEdicion) {
      this.librosService.actualizarlibro(this.libroNuevo).subscribe(() => {
        this.obtenerLibros();
        this.resetFormulario();
      });
    } else {
      this.librosService.agregarlibro(this.libroNuevo).subscribe(() => {
        this.obtenerLibros();
        this.resetFormulario();
      });
    }
  }

  editarLibro(libro: libros): void {
    this.libroNuevo = { ...libro };
    this.modoEdicion = true;
  }

  eliminarLibro(id: number): void {
    this.librosService.eliminarlibro(id).subscribe(() => {
      this.obtenerLibros();
    });
  }

  obtenerLibros(): void {
    this.librosService.obtenerTodos().subscribe((libros: libros[]) => {
      this.librosEncontrados = libros;
      this.busquedaRealizada = true;
    });
  }

  obtenerAutores(): void {
    this.autoresService.obtenerTodos().subscribe((autores: any[]) => {
      this.autoresDisponibles = autores;
    });
  }

  obtenerNombreAutor(id: number): string {
    const autor = this.autoresDisponibles.find(a => a.id === id);
    return autor ? autor.nombre : 'Desconocido';
  }

  resetFormulario(): void {
    this.libroNuevo = { id: 0, titulo: '', id_autor: 0 };
    this.modoEdicion = false;
  }
}

