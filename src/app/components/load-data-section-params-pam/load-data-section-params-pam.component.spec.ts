import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionParamsPamComponent } from './load-data-section-params-pam.component';

describe('LoadDataSectionParamsPamComponent', () => {
  let component: LoadDataSectionParamsPamComponent;
  let fixture: ComponentFixture<LoadDataSectionParamsPamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionParamsPamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionParamsPamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
