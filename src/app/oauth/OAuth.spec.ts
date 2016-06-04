import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing'
import { OAuthComponent } from './OAuth'

beforeEachProviders(() => [ OAuthComponent ])

describe('App: Angualar2Teambition', () => {
  it('should create the app',
      inject([OAuthComponent], (app: OAuthComponent) => {
    expect(app).toBeTruthy()
  }))

  it('should have as title \'angualar2-teambition works!\'',
    inject([ OAuthComponent ], (app: OAuthComponent) => {
      expect(app.title).toEqual('angualar2-teambition works!')
    })
  )
})
