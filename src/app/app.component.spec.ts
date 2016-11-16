/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { MockCountriesService } from './countries.service.mock';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[{provide:CountriesService,useClass:MockCountriesService}]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should filter out population less than 1000', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    app.population = 1000;
    expect(app.populationFilter({population:324234})).toBeTruthy();
    expect(app.populationFilter({population:33})).toBeFalsy();
  }));

  it('should show countries with more than 10000 population (China,India)',()=>{
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    app.onPopulationChange(10000);
    expect(app.countries.map(item=>item.name)).toEqual(['China','India']);
  });
});
