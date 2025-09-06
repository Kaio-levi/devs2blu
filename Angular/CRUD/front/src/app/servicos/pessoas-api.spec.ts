import { TestBed } from '@angular/core/testing';

import { PessoasApi } from './pessoas-api';

describe('PessoasApi', () => {
  let service: PessoasApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoasApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
