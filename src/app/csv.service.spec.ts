import { TestBed } from '@angular/core/testing';

import { CsvService } from './csv.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CsvService = TestBed.get(CsvService);
    expect(service).toBeTruthy();
  });
});
