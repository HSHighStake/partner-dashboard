import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HsPiechartComponent } from '../hs-piechart/hs-piechart.component';
import { HsSalaryComponent } from '../hs-salary/hs-salary.component';
import { HsSalaryFormularComponent } from '../hs-salary-formular/hs-salary-formular.component';
import { HsHomeComponent } from '../hs-home/hs-home.component';
import { HsWorkingWithUsComponent } from '../hs-working-with-us/hs-working-with-us.component';
import { HsImprintComponent } from '../hs-imprint/hs-imprint.component';

const appRoutes: Routes = [
	{ path: '', component: HsHomeComponent },
	{ path: 'home', component: HsHomeComponent },
	{ path: 'salary', component: HsSalaryComponent },
	{ path: 'formular', component: HsSalaryFormularComponent },
	{ path: 'piechart', component: HsPiechartComponent },
	{ path: 'working_with_us', component: HsWorkingWithUsComponent },
	{ path: 'imprint', component: HsImprintComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
