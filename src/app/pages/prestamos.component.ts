import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrestamosService } from '../services/prestamos.services';
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

  constructor(private prestamosService: PrestamoService) {}

  buscarPrestamo(): void {
    this.prestamoService.buscarPrestamo(this.idBuscado).subscribe(
      (prestamo) => {
        if (prestamo) {
          this.prestamoEncontrado = prestamo;
          this.prestamoNoEncontrado = false;
        } else {
          this.prestamoEncontrado = null;
          this.prestamoNoEncontrado = true;
        }
      },
      (error) => {
        this.prestamoEncontrado = null;
        this.prestamoNoEncontrado = true;
      }
    );
  }
}
