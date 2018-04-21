import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HsPiechartComponent } from '../hs-piechart/hs-piechart.component';
import { HsSalaryComponent } from '../hs-salary/hs-salary.component';
import { HsSalaryFormularComponent } from '../hs-salary-formular/hs-salary-formular.component';

const appRoutes: Routes = [
  { path: '', component: HsSalaryFormularComponent },
  { path: 'summary', component: HsSalaryComponent },
  { path: 'formular', component: HsSalaryFormularComponent },
  { path: 'piechart', component: HsPiechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
