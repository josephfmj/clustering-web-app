import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataSectionUploadComponent } from './load-data-section-upload.component';

describe('LoadDataSectionUploadComponent', () => {
  let component: LoadDataSectionUploadComponent;
  let fixture: ComponentFixture<LoadDataSectionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataSectionUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataSectionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
