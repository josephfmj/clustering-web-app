import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionParamsDianaComponent } from './load-data-section-params-diana.component';

describe('LoadDataSectionParamsDianaComponent', () => {
  let component: LoadDataSectionParamsDianaComponent;
  let fixture: ComponentFixture<LoadDataSectionParamsDianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionParamsDianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionParamsDianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
