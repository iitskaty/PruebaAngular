import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ← Importa FormsModule

import { LibrosService } from '../../services/libros.service'; // Corrected path
import { libros } from './libros';

@Component({
  selector: 'app-libros',
  standalone: true,   // ← Esto indica que es componente independiente
  imports: [CommonModule, FormsModule],  // ← Aquí agregas FormsModule
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  nombreBuscado: string = '';
  libroEncontrado: libros | null = null;
  libroNoEncontrado: boolean = false;

  constructor(private librosService: LibrosService) {}

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
      (error: any) => { // Added explicit type
        this.libroEncontrado = null;
        this.libroNoEncontrado = true;
      }
    );
  }
}