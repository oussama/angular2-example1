import { StargetPage } from './app.po';

describe('starget App', function() {
  let page: StargetPage;

  beforeEach(() => {
    page = new StargetPage();
  });

  it('should show china only', () => {
    page.navigateTo();
    page.input(1300000000);
    expect(page.getCountries()).toEqual('China');
  });
});
