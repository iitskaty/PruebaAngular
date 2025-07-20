import { Autores } from './autores';

describe('Autores', () => {
  let autor: Autores;

  beforeEach(() => {
    autor = { id: 1, nombre: 'Autor de prueba', nacionalidad: 'Desconocida' }; // Crear un objeto que cumpla con la interfaz Autores
  });

  it('Autor creado ', () => {
    expect(autor).toBeTruthy();
  });
});
