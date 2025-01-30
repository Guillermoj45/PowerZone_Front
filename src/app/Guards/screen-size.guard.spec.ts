import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { screenSizeGuard } from './screen-size.guard';

describe('screenSizeGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => screenSizeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
