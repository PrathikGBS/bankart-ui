import { Injectable } from "@angular/core";
import { IAppService } from "./iapp.service";
import { environment } from "../../environments/environment";
import { Http, Headers, RequestOptions } from "@angular/http";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/finally";
import { HelperService } from './helper.service';
import { StorageService } from './storage.service';

@Injectable()
export class MockService extends IAppService {
  private url: string = environment.mockURL;
  private options = {
    headers: new Headers({ "Content-Type": "application/json" })
  };
  private oAuthOptions = {
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };
  private tokenValue: string;
  constructor(
    private http: Http,
    private storageService: StorageService,
    private helperService: HelperService
  ) {
    super();
  }

  checkOauth(): any {
      const token = this.storageService.retrieveToken();
      if (!token && token != null) {
        if (this.tokenValue === undefined || this.tokenValue === "") {
          this.tokenValue = "Bearer " + token;
          this.options.headers.append("Authorization", this.tokenValue);
        }
      } else {
        this.Login();
      }
  }

  handleResponse(): void {
    // turn off loading spinner
    this.helperService.setLoading(false);
  }

  Login(): void {
    const code = localStorage.getItem('code')
    let body = new URLSearchParams();
    body.set("grant_type", "authorization_code");
    body.set("client_id", 'bankkart');
    body.set("client_secret", 'secret');
    body.set("redirect_uri", 'http://localhost:4200/loanoffer');
    body.set("code", code);
    this.http
      .post(`${environment.loginUrl}`, body.toString(),this.oAuthOptions)
      .subscribe(response => {
        this.storageService.store(response.access_token);
        this.tokenValue = "Bearer " + response.access_token;
        this.options.headers.append("Authorization", this.tokenValue);
      });
  }

  Transactions(): Promise<any> {
    this.checkOauth();
    return this.http
      .get(`${environment.transactionalUrl}`)
      .finally(() => this.handleResponse())
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  Accounts(): Promise<any> {
    this.checkOauth();
    return this.http
      .get(`${environment.accountsUrl}`)
      .finally(() => this.handleResponse())
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.Message || error.json() || error);
  }
}
