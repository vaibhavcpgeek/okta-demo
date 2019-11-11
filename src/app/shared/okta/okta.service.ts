import { Injectable } from '@angular/core';
declare let OktaSignIn: any;

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://publicissapientswaroop.okta.com',
      clientId: '0oa1r8ica1nyCJrfV357',
      redirectUri: 'http://3.10.245.84:4200',
      authParams: {
        responseType: ['id_token', 'token']
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}
