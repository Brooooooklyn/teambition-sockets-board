import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angualar2TeambitionAppComponent } from '../app/angualar2-teambition.component';

beforeEachProviders(() => [Angualar2TeambitionAppComponent]);

describe('App: Angualar2Teambition', () => {
  it('should create the app',
      inject([Angualar2TeambitionAppComponent], (app: Angualar2TeambitionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angualar2-teambition works!\'',
      inject([Angualar2TeambitionAppComponent], (app: Angualar2TeambitionAppComponent) => {
    expect(app.title).toEqual('angualar2-teambition works!');
  }));
});
