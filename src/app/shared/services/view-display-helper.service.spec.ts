import { TestBed } from '@angular/core/testing';

import { ViewDisplayHelperService } from './view-display-helper.service';

describe('ViewDisplayHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewDisplayHelperService = TestBed.get(ViewDisplayHelperService);
    expect(service).toBeTruthy();
  });
});
