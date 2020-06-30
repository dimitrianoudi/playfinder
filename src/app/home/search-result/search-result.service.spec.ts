import { TestBed } from '@angular/core/testing';
import { SearchResultService } from './search-result.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SearchResultService', () => {
  let service: SearchResultService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchResultService],
    });

    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SearchResultService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('#getAllEmployees', () => {
    let expectedEmps: any[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        { id: 101, name: 'Dimitri' },
        { id: 102, name: 'Jim' },
      ] as any[];
    });

    //Test case 1
    let obj = {
      endDate: '2018-01-15',
      patchId: '32990',
      startDate: '2018-01-09',
    };
    it('should return expected employees by calling once', () => {
      service.getResults(obj).subscribe((emps) => expect(emps).toEqual(expectedEmps), fail);

      let url =
        service.url +
        'pitches/' +
        obj['patchId'] +
        '/slots?filter%5Bstarts%5D=' +
        obj['startDate'] +
        '&filter%5Bends%5D=' +
        obj['endDate'];

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedEmps); //Return expectedEmps
    });

    // Test case 2
    it('should be OK returning no employee', () => {
      service
        .getResults({
          endDate: '2018-01-15',
          patchId: '32990',
          startDate: '2018-01-09',
        })
        .subscribe((emps: any) => expect(emps.length).toEqual(0), fail);

      let url =
        service.url +
        'pitches/' +
        obj['patchId'] +
        '/slots?filter%5Bstarts%5D=' +
        obj['startDate'] +
        '&filter%5Bends%5D=' +
        obj['endDate'];
      const req = httpTestingController.expectOne(url);
      req.flush([]); //Return empty data
    });
  });
});