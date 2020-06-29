import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentComponent } from './search-component.component';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '@app/@shared';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;
  let innerTestParams: any;
  let subject: BehaviorSubject<any> = new BehaviorSubject(innerTestParams);
  const formBuilder: FormBuilder = new FormBuilder();

  let params = subject.asObservable();
  let queryParams = subject.asObservable();

  const fakeActivatedRoute = {
    snapshot: { data: {} },
    queryParams: queryParams,
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [SearchComponentComponent, LoaderComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, HttpClient, HttpHandler],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    component.schoolGroup = formBuilder.group({
      patchId: ['32990', [Validators.required]],
      startDate: ['2018-01-09', [Validators.required]],
      endDate: ['2018-01-15', [Validators.required]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
