import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  population = 0;
  countries = [];

  constructor(private service:CountriesService){
    
  }

  ngOnInit(){
    this.service.getCountries().subscribe();
  }

  onPopulationChange(value){
    this.population = parseInt(value);
    this.countries = this.service.countries.filter(item=>this.populationFilter(item));
  }

  populationFilter(country){
    return country.population > this.population; 
  }

}
