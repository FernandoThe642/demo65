import { TestBed } from '@angular/core/testing';

import { GestionPerrosService } from './gestion-perros.service';

describe('GestionPerrosService', () => {
  let service: GestionPerrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPerrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
