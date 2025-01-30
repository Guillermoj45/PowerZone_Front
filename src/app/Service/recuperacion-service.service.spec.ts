import { TestBed } from '@angular/core/testing';

import { RecuperacionServiceService } from './recuperacion-service.service';

describe('RecuperacionServiceService', () => {
  let service: RecuperacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
