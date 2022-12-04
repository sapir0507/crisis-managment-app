import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
const More = require('highcharts/highcharts-more');
const Exporting = require('highcharts/modules/exporting');
const ExportData = require('highcharts/modules/export-data');
const Accessibility = require('highcharts/modules/accessibility');

More(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  ngOnInit(){
    // this.options.series = this.options.series.map((object: any)=>{
    //   console.log(object.data);
    //   return object
    // })
    Highcharts.chart('container', this.options);
  }

  chart: Highcharts.ChartOptions = {
    plotBackgroundColor: undefined,
    plotBorderWidth: undefined,
    plotShadow: false,
    type: 'pie'
  }

  accessibility: Highcharts.AccessibilityOptions = {
    point: {
      valueSuffix: '%'
    }
  }

  plotOptions: Highcharts.PlotOptions = {
    pie:{
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels:{
        enabled:false
      },
      showInLegend:true
    }
  }

  title: Highcharts.TitleOptions = {
    text: "crisis managment"
  }

  tooltip: Highcharts.TooltipOptions = {
    pointFormat: '{series.name}: {point.percentage:.1f}%'
  }
  
  public options: any = {
   chart: this.chart,
   title: this.title,
   tooltip: this.tooltip,
   accessibility: this.accessibility,
   plotOptions: this.plotOptions,
   series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 60.0,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 11.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 5.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.0
    }, {
        name: 'Other',
        y: 2.61
    }]
}]
  }
}
