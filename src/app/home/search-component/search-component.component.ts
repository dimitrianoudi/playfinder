import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchResultService } from '../search-result/search-result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  schoolGroup: FormGroup;
  results: any = [];
  isLoading = false;
  @Output() valueChange = new EventEmitter();
  constructor(private fb: FormBuilder, private service: SearchResultService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // {order: "popular"}
      this.schoolGroup = this.fb.group({
        patchId: [params['patchid'] != null ? +params['patchid'] : '32990', [Validators.required]],
        startDate: [params['start'] != null ? params['start'] : '2018-01-09', [Validators.required]],
        endDate: [params['end'] != null ? params['end'] : '2018-01-15', [Validators.required]],
      });
    });
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.schoolGroup.value);
    this.service.getResults(this.schoolGroup.value).subscribe(
      (data: any) => {
        this.results = data.data;
        this.valueChange.emit(this.results);
        this.isLoading = false;
      },
      (error: any) => {
        this.results = [];
        this.valueChange.emit(this.results);
        this.isLoading = false;
      }
    );
  }
}
