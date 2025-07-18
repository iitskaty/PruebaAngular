import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutorService } from '../services/autor.service';
import { Autores } from './autores';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {
  nombreBuscado: string = '';
  autorEncontrado: Autores | null = null;
  autorNoEncontrado: boolean = false;

  constructor(private AutoresService: AutorService) {}

  obtenerAutores(): void {
    this.AutoresService.obtenerAutores(this.nombreBuscado).subscribe(
      (autor) => {
      if (autor) {
        this.autorEncontrado = autor;
        this.autorNoEncontrado = false;
      } else {
        this.autorEncontrado = null;
        this.autorNoEncontrado = true;
      }
      },
      (error) => {
      console.error('Error al obtener el autor:', error);
      this.autorEncontrado = null;
      this.autorNoEncontrado = true;
      }
    );
  }
}