import { Routes } from '@angular/router';
import { PaginaAutor } from './pages/autor-component/autores.component';
import { PaginaLibros } from './pages/libros-component/libros.component';
import { PaginaPrestamos } from './pages/prestamos-component/prestamos.component';
import { PaginaUsuarios } from './pages/usuarios-component/usuarios.component'

export const routes: Routes = [
  { path: '', component: PaginaAutor }, // Página principal
  { path: 'productos', component: PaginaLibros },
  { path: 'contactame', component: PaginaPrestamos },
  { path: 'usuarios', component: PaginaUsuarios }
];
