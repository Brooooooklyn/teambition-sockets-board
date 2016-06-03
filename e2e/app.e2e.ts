import { Angualar2TeambitionPage } from './app.po';

describe('angualar2-teambition App', function() {
  let page: Angualar2TeambitionPage;

  beforeEach(() => {
    page = new Angualar2TeambitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angualar2-teambition works!');
  });
});
