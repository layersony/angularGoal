import { TestBed } from '@angular/core/testing';

import { QuoteResquestService } from './quote-resquest.service';

describe('QuoteResquestService', () => {
  let service: QuoteResquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteResquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
