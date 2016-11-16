import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs'

@Injectable()
export class CountriesService {

  countries = [];

  constructor(private http:Http) { }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v1/all')
    .map(res=>res.json())
    .map(res=>{
      this.countries = res;
      return res;
    })
  }

}
