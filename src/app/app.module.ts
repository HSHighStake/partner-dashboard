import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HsPiechartComponent } from './hs-piechart/hs-piechart.component';
import { HsSalarySummayComponent } from './hs-salary-summary/hs-salary-summary.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HsSalaryFormularComponent } from './hs-salary-formular/hs-salary-formular.component';
import { HsProfitsCalculatorService } from './hs-profits-calculator.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HsPiechartComponent,
    HsSalarySummayComponent,
    HsSalaryFormularComponent
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
