/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DavidDataService } from './david-data.service';

describe('DavidDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DavidDataService]
    });
  });

  it('should ...', inject([DavidDataService], (service: DavidDataService) => {
    expect(service).toBeTruthy();
  }));
});
