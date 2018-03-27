import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { AppComponent } from './app.component';
import { HsPiechartComponent } from './hs-piechart/hs-piechart.component';
import { HsSalarySummayComponent } from './hs-salary-summay/hs-salary-summay.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HsSalaryFormularComponent } from './hs-salary-formular/hs-salary-formular.component';

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
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
