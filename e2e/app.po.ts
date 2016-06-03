export class Angualar2TeambitionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angualar2-teambition-app h1')).getText();
  }
}
