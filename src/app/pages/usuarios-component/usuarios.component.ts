import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    correo: '',
    rut: ''
  };

  modoEdicion: boolean = false;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuariosService.obtenerTodos().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  agregarUsuario(): void {
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.correo) return;

    if (this.modoEdicion) {
      if (this.nuevoUsuario.id !== undefined && this.nuevoUsuario.id !== 0) {
        this.usuariosService.actualizar(this.nuevoUsuario.id, this.nuevoUsuario).subscribe({
          next: () => {
            this.cargarUsuarios();
            this.resetFormulario();
          },
          error: (err) => console.error('Error actualizando usuario:', err)
        });
      } else {
        console.error('El usuario no tiene un ID válido para actualizar');
      }
    } else {
      // Para creación, el backend debería asignar el id
      const usuarioSinId = { ...this.nuevoUsuario };
      delete usuarioSinId.id;

      this.usuariosService.crear(usuarioSinId as Usuario).subscribe({
        next: () => {
          this.cargarUsuarios();
          this.resetFormulario();
        },
        error: (err) => console.error('Error creando usuario:', err)
      });
    }
  }

  eliminarUsuario(usuario: Usuario): void {
    if (!usuario.id) return;

    this.usuariosService.eliminar(usuario.id).subscribe({
      next: () => this.cargarUsuarios(),
      error: (err) => console.error('Error eliminando usuario:', err)
    });
  }

  editarUsuario(usuario: Usuario): void {
    this.nuevoUsuario = { ...usuario };
    this.modoEdicion = true;
  }

  resetFormulario(): void {
    this.nuevoUsuario = { id: 0, nombre: '', correo: '', rut: '' };
    this.modoEdicion = false;
  }
}
