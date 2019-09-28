import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from './../base.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { HelperService } from '../services/helper.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent extends BaseComponent {
  title = 'Loan offer';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService,
    private helperService: HelperService,
    private storageService: StorageService
  ) {
    super();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let code = params.code;
      localStorage.setItem('code', code);
        this.appService
        .Transactions()
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          this.helperService.setShowErrorModal(err);
        });
        })
  }
}
