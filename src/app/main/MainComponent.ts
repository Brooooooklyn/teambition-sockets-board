import { Component, OnInit } from '@angular/core'
import { Routes, Router, ROUTER_PROVIDERS } from '@angular/router'
import { UserMe, client, setToken, eventParser, Utils } from 'teambition-sdk'
import { OAuthComponent } from '../oauth/OAuth'
import { clientId } from '../../services/TokenService'
import { InjectableUserAPI } from '../../services/InjectableSdk'
import { getParameterByName } from '../../utils/browser'

export const appUrl = 'http://teambition.vvlyn.xyz'

@Component({
  selector: 'main-component',
  templateUrl: 'app/main/index.html',
  providers: [ InjectableUserAPI, ROUTER_PROVIDERS ]
})
@Routes([
  { path: 'oauth/:authCode', component: OAuthComponent }
])
export class MainComponent implements OnInit {

  results: any[] = []

  private userMe: UserMe
  private token: string
  private _isProxyed = false

  private loginUrl = `https://account.teambition.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(appUrl)}`

  constructor(private UserAPI: InjectableUserAPI, private router: Router) {
    const code = getParameterByName('code')
    if (code) {
      router.navigateByUrl(`oauth/${code}`)
    }else {
      this.token = localStorage.getItem('access_token')
      if (!this.token) {
        window.location.href = this.loginUrl
      }else {
        setToken(this.token)
      }
    }
  }

  ngOnInit() {
    return this.UserAPI
      .getUserMe()
      .subscribe(userMe => {
        this.userMe = userMe
        if (!this._isProxyed) {
          this.proxySocket()
        }
      }, err => {
        localStorage.removeItem('access_token')
        window.location.href = this.loginUrl
        console.error(err)
      })
  }

  proxySocket() {
    const originMessageFn = client['_client'].onmessage
    client['_client'].onmessage = (evt: any) => {
      const result = eventParser(evt)
      Utils.concat(this.results, result.filter(res => {
        return res.data && res.data._id
      }).map(res => {
        return this._trasformData(res.data)
      }))
      return originMessageFn.call(client, evt)
    }
    client.connect()
    this._isProxyed = true
  }

  private _trasformData(data: any) {
    const result: {key: string, value: string}[] = []
    Utils.forEach(data, (val, key) => {
      result.push({
        value: val,
        key: key
      })
    })
    return result
  }

}
