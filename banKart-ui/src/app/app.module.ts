import { StorageService } from './services/storage.service';
import { HelperService } from './services/helper.service';
import { MockService } from './services/mock.service';
import { AppService } from './services/app.service';
import { IAppService } from './services/iapp.service';
import { WindowRef } from "./shared/windowRef";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    WindowRef,
    AppService,
    MockService,
    HelperService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
