import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  @Input('searchResults')
  set searchResults(value: any) {
    this.results = value;
    this.collectionSize = value.length;
  }
  results: any = [];

  constructor() {}

  get countries(): any[] {
    return this.results
      .map((country: any, i: any) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this.collectionSize = this.results.length;
  }

  getDuration(start: any, end: any) {
    let endDate: Date = new Date(end);
    let purchaseDate: Date = new Date(start);
    let diffMs: any = endDate.valueOf() - purchaseDate.valueOf(); // milliseconds
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return '' + diffHrs + ' : ' + diffMins;
  }
}