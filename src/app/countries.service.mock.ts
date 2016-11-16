import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs'

@Injectable()
export class MockCountriesService {

  countries = [
      {name:'China',population:12312312312},
      {name:'Tunisia',population:23},
      {name:'India',population:12312312312},
      {name:'France',population:221},
    ]

  constructor() { }

  getCountries(){}

}
