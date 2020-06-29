import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  url: string = environment.APIURL;
  constructor(private http: HttpClient) {}

  getResults(obj: any) {
    const finalUrl =
      this.url +
      'pitches/' +
      obj['patchId'] +
      '/slots?filter%5Bstarts%5D=' +
      obj['startDate'] +
      '&filter%5Bends%5D=' +
      obj['endDate'];
    return this.http.get(finalUrl);
  }
}
