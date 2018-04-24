import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HsPiechartComponent } from './hs-piechart/hs-piechart.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HsProfitsCalculatorService } from './hs-profits-calculator.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HsNavigationComponent } from './hs-navigation/hs-navigation.component';
import { HsFooterComponent } from './hs-footer/hs-footer.component';
import { HsScrollToTopComponent } from './hs-scroll-to-top/hs-scroll-to-top.component';
import { HsPaginationComponent } from './hs-pagination/hs-pagination.component';
import { HsSalaryComponent } from './hs-salary/hs-salary.component';
import { HsSalaryFormularComponent } from './hs-salary-formular/hs-salary-formular.component';
import { HsSalarySummaryDetailsComponent } from './hs-salary-summary-details/hs-salary-summary-details.component';
import { HsSalarySummaryOverviewComponent } from './hs-salary-summary-overview/hs-salary-summary-overview.component';
import { HsDownloadButtonsComponent } from './hs-download-buttons/hs-download-buttons.component';
import { HsHomeComponent } from './hs-home/hs-home.component';
import { HsWorkingWithUsComponent } from './hs-working-with-us/hs-working-with-us.component';
import { HsImprintComponent } from './hs-imprint/hs-imprint.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HsPiechartComponent,
    HsNavigationComponent,
    HsFooterComponent,
    HsScrollToTopComponent,
	HsPaginationComponent,
	HsSalaryComponent,
    HsSalaryFormularComponent,
    HsSalarySummaryDetailsComponent,
    HsSalarySummaryOverviewComponent,
    HsDownloadButtonsComponent,
    HsHomeComponent,
    HsWorkingWithUsComponent,
    HsImprintComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HsProfitsCalculatorService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
