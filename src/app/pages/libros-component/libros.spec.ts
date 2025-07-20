import { TestBed } from '@angular/core/testing';

import { libros } from './libros';
import { LibrosService } from '../../services/libros.service'; // Corrected path

describe('libros', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
