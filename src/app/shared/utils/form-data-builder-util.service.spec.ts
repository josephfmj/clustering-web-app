import { TestBed } from '@angular/core/testing';

import { FormDataBuilderUtilService } from './form-data-builder-util.service';

describe('FormDataBuilderUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormDataBuilderUtilService = TestBed.get(FormDataBuilderUtilService);
    expect(service).toBeTruthy();
  });
});
