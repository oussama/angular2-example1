/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule,Http } from '@angular/http';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [CountriesService]
    });
  });

  it('should ...', inject([CountriesService], (service: CountriesService) => {
    expect(service).toBeTruthy();
  }));
});
