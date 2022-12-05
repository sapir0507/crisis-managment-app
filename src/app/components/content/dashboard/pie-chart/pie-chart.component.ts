import { ICrisis } from './../../../../services/crisis.interface';
import { UtilsService } from './../../../../services/utils.service';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
const More = require('highcharts/highcharts-more');
const Exporting = require('highcharts/modules/exporting');
const ExportData = require('highcharts/modules/export-data');
const Accessibility = require('highcharts/modules/accessibility');
import { Options } from "highcharts";


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
  @ViewChild("chart") componentRef: any;
  chartRef: any;
  updateFlag:boolean = true;

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
    
    this.redrawChart()
    Highcharts.chart('container', this.chartOptions);
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

  chartOptions: Options = {
    title:{
      text: "crisis managment"
    },
    series: [{
      data: this.dataItems,
      type: "pie",
      cursor: "pointer",
      showInLegend: true,
      dataLabels: {enabled: false},
      allowPointSelect: true,
      keys: ['name', 'y', 'sliced', 'selected', 'color'],
      colorByPoint: true,
    }]
  }

  chartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };

  redrawChart(): void {
    this.chartRef.destroy();
    this.componentRef.chart = null;
    this.chartOptions = this.chartOptions;
    this.updateFlag = true;
  }

}




