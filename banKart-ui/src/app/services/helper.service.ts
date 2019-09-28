import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { WindowRef }        from '../shared/windowRef';

@Injectable()
export class HelperService {
  private isLoadingSubject = new Subject<boolean>();
  private isShowingErrorModalSubject = new Subject<Error>();

  constructor (private windowRef: WindowRef) {}

  setShowErrorModal(modal: Error) {
    this.isShowingErrorModalSubject.next(modal)
  }

  getShowErrorModal(): Observable<Error> {
    return this.isShowingErrorModalSubject.asObservable();
  }

  setLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  getLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

}
