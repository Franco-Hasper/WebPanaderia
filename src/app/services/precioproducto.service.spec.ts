import { TestBed } from '@angular/core/testing';

import { PrecioproductoService } from './precioproducto.service';

describe('PrecioproductoService', () => {
  let service: PrecioproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecioproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
