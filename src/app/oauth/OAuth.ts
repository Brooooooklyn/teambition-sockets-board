import { Component, OnInit } from '@angular/core'
import { Routes, RouteSegment, ROUTER_PROVIDERS } from '@angular/router'
import { setToken, client } from 'teambition-sdk'
import { TokenService } from '../../services/TokenService'

@Component({
  moduleId: module.id,
  selector: 'teambition-oauth',
  templateUrl: 'OAuth.html',
  styleUrls: ['OAuth.css'],
  providers: [ TokenService, ROUTER_PROVIDERS ]
})
export class OAuthComponent implements OnInit {
  private authCode: string

  title = 'Getting OAuth Code'

  constructor(private TokenService: TokenService, private router: RouteSegment) {
    this.authCode = this.router.getParam('authCode')
  }

  ngOnInit(): Promise<any> {
    return this.TokenService.getToken(this.authCode)
      .then(token => {
        setToken(token)
        client.connect()
      })
  }
}
