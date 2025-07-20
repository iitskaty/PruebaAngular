import { TestBed } from '@angular/core/testing';

import { libros } from './libros';
import { LibrosService } from '../services/libros.service';

describe('libros', () => {
  let service: libros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
