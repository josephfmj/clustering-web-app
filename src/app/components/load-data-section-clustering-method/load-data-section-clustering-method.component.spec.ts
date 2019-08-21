import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionClusteringMethodComponent } from './load-data-section-clustering-method.component';

describe('LoadDataSectionClusteringMethodComponent', () => {
  let component: LoadDataSectionClusteringMethodComponent;
  let fixture: ComponentFixture<LoadDataSectionClusteringMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionClusteringMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionClusteringMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
