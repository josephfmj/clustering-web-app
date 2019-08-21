import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionParamsKmeansComponent } from './load-data-section-params-kmeans.component';

describe('LoadDataSectionParamsKmeansComponent', () => {
  let component: LoadDataSectionParamsKmeansComponent;
  let fixture: ComponentFixture<LoadDataSectionParamsKmeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionParamsKmeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionParamsKmeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
