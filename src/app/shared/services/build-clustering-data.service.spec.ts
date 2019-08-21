import { TestBed } from '@angular/core/testing';

import { BuildClusteringDataService } from './build-clustering-data.service';

describe('BuildClusteringDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildClusteringDataService = TestBed.get(BuildClusteringDataService);
    expect(service).toBeTruthy();
  });
});
