import { TestBed } from '@angular/core/testing';

import { DisplayContentService } from './display-content.service';

describe('DisplayContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayContentService = TestBed.get(DisplayContentService);
    expect(service).toBeTruthy();
  });
});
