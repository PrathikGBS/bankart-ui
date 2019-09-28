import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { HelperService } from './services/helper.service';
import { StorageService } from './services/storage.service';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent extends BaseComponent {
  title = 'Loan offer';

  constructor(
    private router: Router,
    private appService: AppService,
    private helperService: HelperService,
    private storageService: StorageService
  ) {
    super();
  }

  ngOnInit() {
    this.appService
      .Transactions()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        this.helperService.setShowErrorModal(err);
      });
  }
}
