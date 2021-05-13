import { TestBed } from '@angular/core/testing';

import { CricbuzzService } from './cricbuzz.service';

describe('CricbuzzService', () => {
  let service: CricbuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricbuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
