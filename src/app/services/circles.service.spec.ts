/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CirclesService } from './circles.service';

describe('CirclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CirclesService]
    });
  });

  it('should ...', inject([CirclesService], (service: CirclesService) => {
    expect(service).toBeTruthy();
  }));
});
