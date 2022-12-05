import { ICrisis } from './../../../../services/crisis.interface';
import { UtilsService } from './../../../../services/utils.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
const More = require('highcharts/highcharts-more');
const Exporting = require('highcharts/modules/exporting');
const ExportData = require('highcharts/modules/export-data');
const Accessibility = require('highcharts/modules/accessibility');

More(Highcharts);
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

export interface DataItem {
  name: string,
  y: number,
  sliced?: boolean,
  selected?: boolean
  color?: string
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  DB: ICrisis[] | null = null

  constructor(
    private crisisService: UtilsService
    ){}

  async ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.   
   
    this.DB = await this.crisisService.get_all_crisis()
    
    this.dataItems[0].y = this.DB.filter((item)=>{return item.severity===1}).length;
    this.dataItems[1].y = this.DB.filter((item)=>{return item.severity===2}).length;
    this.dataItems[2].y = this.DB.filter((item)=>{return item.severity===3}).length;
    
    Highcharts.chart('container', this.options);
  }

  dataItems: DataItem[] = [{
    name: "Critical",
    y: 60.0,
    sliced: true,
    selected: true,
    color: "red"
  }, {
    name: "Medium",
    y: 20.0,
    sliced: false,
    selected: false,
    color: "orange"
  }, {
    name: "Low",
    y: 20.0,
    sliced: false,
    selected: false,
    color: "yellow"
  }];

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
    keys: ['name', 'y', 'sliced', 'selected', 'color'],
    data: this.dataItems
   }]
  }
}




