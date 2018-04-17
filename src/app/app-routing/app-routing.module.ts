import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HsPiechartComponent } from '../hs-piechart/hs-piechart.component';
import { HsSalarySummayComponent } from '../hs-salary-summay/hs-salary-summay.component';
import { HsSalaryFormularComponent } from '../hs-salary-formular/hs-salary-formular.component';

const appRoutes: Routes = [
  { path: '', component: HsSalarySummayComponent },
  { path: 'summary', component: HsSalarySummayComponent },
  { path: 'formular', component: HsSalaryFormularComponent },
  { path: 'piechart', component: HsPiechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
