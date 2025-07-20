import { Routes } from '@angular/router';
import { AutoresComponent } from './pages/autor-component/autores.component';
import { LibrosComponent } from './pages/libros-component/libros.component';
import { PrestamoComponent } from './pages/prestamos-component/prestamos.component';
import { UsuariosComponent } from './pages/usuarios-component/usuarios.component';

export const routes: Routes = [
  { path: '', component: AutoresComponent }, // Página principal
  { path: 'Libros', component: LibrosComponent },
  { path: 'Prestamos', component: PrestamoComponent },
  { path: 'Usuarios', component: UsuariosComponent }
];
