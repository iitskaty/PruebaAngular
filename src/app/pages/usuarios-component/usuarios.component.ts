import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
    usuarios = [
        //Ejemplo
        { nombre:'Juan Pérez', correo: 'juan@examole.com', rut: '11.111.111-1'}
    ];

    nuevoUsuario = {
        nombre: '',
        correo: '',
        rut: ''
    };

    agregarUsuario() {
        if (this.nuevoUsuario.nombre && this.nuevoUsuario.correo && this.nuevoUsuario.rut) {
           this.usuarios.push({ ...this.nuevoUsuario });
           this.nuevoUsuario = { nombre: '', correo: '', rut: ''};
        }
    }

    eliminarUsuario(usuario: any) {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
    }

     editarUsuario(usuario: any) {
    this.nuevoUsuario = { ...usuario };
    this.eliminarUsuario(usuario); // Así editamos eliminando el viejo y guardando el nuevo
  }
}