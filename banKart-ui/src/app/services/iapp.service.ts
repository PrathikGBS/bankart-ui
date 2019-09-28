import { Observable } from "rxjs/Observable";

export abstract class IAppService {
  abstract Transactions(): Promise<any>;
  abstract Accounts(): Promise<any>;
}
