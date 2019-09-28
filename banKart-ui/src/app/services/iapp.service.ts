import { Observable } from "rxjs/Observable";

export abstract class IAppService {
  abstract Login(): Promise<any>;
  abstract Transactions(): Promise<any>;
  abstract Accounts(): Promise<any>;
}
