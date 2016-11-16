import { browser, element, by } from 'protractor';

export class StargetPage {
  navigateTo() {
    return browser.get('/');
  }

  input(value){
    return  element(by.css('input')).sendKeys(value);
  }  

  getCountries() {
    return element(by.css('li')).getText();
  }
}
