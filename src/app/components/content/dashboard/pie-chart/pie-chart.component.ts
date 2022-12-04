import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  ngOnInit(){
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
    text: ""
  }

  tooltip: Highcharts.TooltipOptions = {
    pointFormat: '{series.name}: <b>{point.precentage.lf}%</b>'
  }

  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     name: 'Brands',
  //     colorByPoint: true,
  //     data: [{
  //         name: 'Chrome',
  //         y: 74.77,
  //         sliced: true,
  //         selected: true
  //     },  {
  //         name: 'Edge',
  //         y: 12.82
  //     },  {
  //         name: 'Firefox',
  //         y: 4.63
  //     }, {
  //         name: 'Safari',
  //         y: 2.44
  //     }, {
  //         name: 'Internet Explorer',
  //         y: 2.02
  //     }, {
  //         name: 'Other',
  //         y:3.28
  //       }]
  //   }]
  // };
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
        y: 59.41,
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
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }]
}]
  }
}
