import { BaseComponent } from './base.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'Home';

  constructor(
  ) {
    super();
  }

  ngOnInit() {
    // this.appService
    //   .Transactions()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     this.helperService.setShowErrorModal(err);
    //   });
  }
}
