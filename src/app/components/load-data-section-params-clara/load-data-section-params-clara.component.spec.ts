import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionParamsClaraComponent } from './load-data-section-params-clara.component';

describe('LoadDataSectionParamsClaraComponent', () => {
  let component: LoadDataSectionParamsClaraComponent;
  let fixture: ComponentFixture<LoadDataSectionParamsClaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionParamsClaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionParamsClaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
