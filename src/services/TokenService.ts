import { Injectable, Inject, Component } from '@angular/core'
import { InjectableFetch } from './InjectableFetch'

export const clientId = '23134d00-29ac-11e6-bc3e-8b922681a9aa'
export const clientSecret = '4afa888b-19c7-4f9e-be09-e7b913aa2e75'

@Injectable()
export class TokenService {

  private Fetch: InjectableFetch = new InjectableFetch()

  constructor() {
    this.Fetch.setAPIHost(`https://api.teambition.com/`)
  }

  getToken(authCode: string): Promise<string> {
    return this.Fetch.post(`oauth2/access_token`, {
      'client_id': clientId,
      'client_secret': clientSecret,
      'code': authCode,
      'grant_type': 'code'
    }).then((resp: {
      access_token: string
      refresh_token: string
    }) => {
      return resp.access_token
    })
  }
}
