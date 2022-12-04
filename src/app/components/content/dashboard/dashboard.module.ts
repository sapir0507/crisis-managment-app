import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    DashboardComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
