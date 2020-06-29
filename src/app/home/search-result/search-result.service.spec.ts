import { TestBed } from '@angular/core/testing';
import { SearchResultService } from './search-result.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchResultService', () => {
  let service: SearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(SearchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
