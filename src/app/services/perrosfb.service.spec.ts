import { TestBed } from '@angular/core/testing';

import { PerrosfbService } from './perrosfb.service';

describe('PerrosfbService', () => {
  let service: PerrosfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerrosfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
