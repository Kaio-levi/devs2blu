import { TestBed } from '@angular/core/testing';

import { Autentificacao } from './autentificacao';

describe('Autentificacao', () => {
  let service: Autentificacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autentificacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
