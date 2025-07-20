import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrestamosService } from '../../services/prestamos.service'; // Corrige la ruta del servicio
import { Prestamo } from './prestamos';

@Component({
  selector:'app-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})

export class PrestamoComponent {
  idBuscado: number = 0;
  prestamoEncontrado: Prestamo | null = null;
  prestamoNoEncontrado: boolean = false;

  constructor(private prestamosService: PrestamosService) {} // Cambia PrestamoService por PrestamosService

  buscarPrestamo(): void {
    this.prestamosService.buscarPrestamo(this.idBuscado).subscribe(
      (prestamo: Prestamo | null) => { // Cambia el tipo a Prestamo | null
        if (prestamo) {
          this.prestamoEncontrado = prestamo;
          this.prestamoNoEncontrado = false;
        } else {
          this.prestamoEncontrado = null;
          this.prestamoNoEncontrado = true;
        }
      },
      (error: any) => {
        this.prestamoEncontrado = null;
        this.prestamoNoEncontrado = true;
      }
    );
  }
}
