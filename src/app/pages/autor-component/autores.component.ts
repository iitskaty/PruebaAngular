import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {
  autorNuevo = {
    nombre: '',
    nacionalidad: ''
  };

  autores: any[] = [];
  modoEdicion = false;

  guardarAutor() {
    if (this.modoEdicion) {
    } else {
      const nuevo = { ...this.autorNuevo, id_autor: Date.now() }; 
      this.autores.push(nuevo);
    }

    this.autorNuevo = { nombre: '', nacionalidad: '' };
    this.modoEdicion = false;
  }

  editarAutor(autor: any) {
    this.autorNuevo = { ...autor };
    this.modoEdicion = true;
  }

  eliminarAutor(id: number) {
    this.autores = this.autores.filter(a => a.id_autor !== id);
  }
}
