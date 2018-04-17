import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HsPiechartComponent } from '../hs-piechart/hs-piechart.component';
import { HsSalarySummaryComponent } from '../hs-salary-summary/hs-salary-summary.component';
import { HsSalaryFormularComponent } from '../hs-salary-formular/hs-salary-formular.component';

const appRoutes: Routes = [
  { path: '', component: HsSalarySummaryComponent },
  { path: 'summary', component: HsSalarySummaryComponent },
  { path: 'formular', component: HsSalaryFormularComponent },
  { path: 'piechart', component: HsPiechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
