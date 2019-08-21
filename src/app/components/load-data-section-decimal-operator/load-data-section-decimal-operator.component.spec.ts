import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionDecimalOperatorComponent } from './load-data-section-decimal-operator.component';

describe('LoadDataSectionDecimalOperatorComponent', () => {
  let component: LoadDataSectionDecimalOperatorComponent;
  let fixture: ComponentFixture<LoadDataSectionDecimalOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionDecimalOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionDecimalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
