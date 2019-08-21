import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionParamsAgnesComponent } from './load-data-section-params-agnes.component';

describe('LoadDataSectionParamsAgnesComponent', () => {
  let component: LoadDataSectionParamsAgnesComponent;
  let fixture: ComponentFixture<LoadDataSectionParamsAgnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionParamsAgnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionParamsAgnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
