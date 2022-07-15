import { TestBed } from '@angular/core/testing';

import { BadassService } from './badass.service';

describe('BadassService', () => {
  let service: BadassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
