import { TestBed } from '@angular/core/testing';

import { ViewClusteringDataService } from './view-clustering-data.service';

describe('BuildClusteringDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewClusteringDataService = TestBed.get(ViewClusteringDataService);
    expect(service).toBeTruthy();
  });
});
