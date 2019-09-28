import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: LandingPageComponent, pathMatch: "full" },
  { path: "loanoffer", component: LoanOfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
