import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import "rxjs/add/operator/map";

/* Service references */
import { MockService } from "./mock.service";
import { IAppService } from "./iapp.service";
import { HelperService } from "./helper.service";

@Injectable()
export class AppService extends IAppService {
  /*Global declaration*/
  prod = environment.production;
  service: IAppService;
  constructor(
    private helperService: HelperService,
    private mockService: MockService
  ) {
    super();
    this.service = this.mockService;
  }

  SetLoadingSpinner(): void {
    this.helperService.setLoading(true);
  }

  Accounts(): Promise<any>{
    this.SetLoadingSpinner();
    return this.service.Accounts();
  }
  
  Transactions(): Promise<any> {
    this.SetLoadingSpinner();
    return this.service.Transactions();
  }
}
