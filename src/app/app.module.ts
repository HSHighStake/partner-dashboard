import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HsPiechartComponent } from './hs-piechart/hs-piechart.component';
import { HsSalarySummaryComponent } from './hs-salary-summary/hs-salary-summary.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HsSalaryFormularComponent } from './hs-salary-formular/hs-salary-formular.component';
import { HsProfitsCalculatorService } from './hs-profits-calculator.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HsNavigationComponent } from './hs-navigation/hs-navigation.component';
import { HsFooterComponent } from './hs-footer/hs-footer.component';
import { HsScrollToTopComponent } from './hs-scroll-to-top/hs-scroll-to-top.component';
import { HsPaginationComponent } from './hs-pagination/hs-pagination.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HsPiechartComponent,
    HsSalarySummaryComponent,
    HsSalaryFormularComponent,
    HsNavigationComponent,
    HsFooterComponent,
    HsScrollToTopComponent,
    HsPaginationComponent
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
