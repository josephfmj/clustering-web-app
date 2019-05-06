import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionAppComponent } from './load-data-section-app.component';

describe('LoadDataSectionAppComponent', () => {
  let component: LoadDataSectionAppComponent;
  let fixture: ComponentFixture<LoadDataSectionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
