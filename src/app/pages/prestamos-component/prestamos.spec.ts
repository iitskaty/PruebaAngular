import { TestBed } from '@angular/core/testing';

import { Prestamo } from './prestamos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockPrestamo {
  // Add mock methods and properties as needed
}

TestBed.configureTestingModule({
  providers: [{ provide: Prestamo, useClass: MockPrestamo }],
});
service = TestBed.inject(Prestamo);

describe('Prestamos', () => {
  let service: Prestamo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prestamo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
