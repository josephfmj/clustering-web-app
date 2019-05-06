import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataSectionAppComponent } from './search-data-section-app.component';

describe('SearchDataSectionAppComponent', () => {
  let component: SearchDataSectionAppComponent;
  let fixture: ComponentFixture<SearchDataSectionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDataSectionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataSectionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
