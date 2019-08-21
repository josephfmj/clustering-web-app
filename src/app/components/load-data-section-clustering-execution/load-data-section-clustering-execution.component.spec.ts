import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionClusteringExecutionComponent } from './load-data-section-clustering-execution.component';

describe('LoadDataSectionClusteringExecutionComponent', () => {
  let component: LoadDataSectionClusteringExecutionComponent;
  let fixture: ComponentFixture<LoadDataSectionClusteringExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionClusteringExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionClusteringExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
