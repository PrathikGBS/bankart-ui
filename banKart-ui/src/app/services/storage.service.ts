import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class StorageService {
  private tokenKey: string;
  private tokenExpiry: string;

  constructor() {
    this.tokenKey = 'app_token';
    this.tokenExpiry = 'app_timer';
  }
    public store(content: Object) {        
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
        const time_to_login = moment(new Date()).add(480, 'm').toDate();
        localStorage.setItem(this.tokenExpiry, JSON.stringify(time_to_login));
    }

    private retrieve() {
        let storedToken: string = localStorage.getItem(this.tokenKey);
        if (!storedToken) {
          throw new Error('no token found');
      }
        return storedToken;
    }

    public retrieveToken() {
        let token = null;
        try {
            let storedToken = JSON.parse(this.retrieve());
            token = storedToken.access_token;
        } catch (err) {
            console.error(err);
        }
        return token;
    }

    public retrievePatientId() {
        let UserId = null;
        try {
            let storedToken = JSON.parse(this.retrieve());
            UserId = storedToken.patientUserId;
        } catch (err) {
            console.error(err);
        }
        return UserId;
    }

    isTokenExpired(): boolean {
		let currentTime = (new Date()), token = null;
        try {
            let timer = new Date(JSON.parse(localStorage.getItem(this.tokenExpiry)));
            if (timer < currentTime) {
              return false;
            }
        } catch (err) {
            return false;
        }
        return true;
    }
    
    remove(): any {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.tokenExpiry);
    }
}
