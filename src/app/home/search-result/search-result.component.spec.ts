import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultService } from './search-result.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SearchResultComponent, NgbPagination],
      providers: [SearchResultService, HttpHandler, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
