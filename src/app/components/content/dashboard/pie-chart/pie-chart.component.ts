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
    console.log(this.DB);

    var crisis_counter:number, low_counter:number, medium_counter:number;

    low_counter = ELEMENT_DATA.filter((item)=>{return item.severity===1}).length
    medium_counter = ELEMENT_DATA.filter((item)=>{return item.severity===2}).length
    crisis_counter = ELEMENT_DATA.filter((item)=>{return item.severity===3}).length
    
    this.dataItems[0].y = crisis_counter;
    this.dataItems[1].y = medium_counter;
    this.dataItems[2].y = low_counter;
    
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

export interface DataItem {
  name: string,
  y: number,
  sliced?: boolean,
  selected?: boolean
  color?: string
}


export interface PeriodicElement {
  id: number;
  _id?: number;
  createdDate: string;
  severity: number;
  status: number;
}


const ELEMENT_DATA: PeriodicElement[] = [{
  id:1,
  createdDate:'01/09/22',
  severity:1,
  status:0
  },{
  id:2,
  createdDate:'22/09/22',
  severity:1,
  status:0
  },{
  id:3,
  createdDate:'01/09/22',
  severity:2,
  status:1
  },{
  id:4,
  createdDate:'03/09/22',
  severity:3,
  status:0
  },{
  id:5,
  createdDate:'03/09/22',
  severity:2,
  status:1
  },{
  id:6,
  createdDate:'10/09/22',
  severity:3,
  status:1
  },{
  id:7,
  createdDate:'01/09/22',
  severity:3,
  status:1
  },{
  id:8,
  createdDate:'02/09/22',
  severity:1,
  status:1
  },{
  id:9,
  createdDate:'07/09/22',
  severity:1,
  status:1
  },{
  id:10,
  createdDate:'08/09/22',
  severity:1,
  status:0
  },{
  id:11,
  createdDate:'05/09/22',
  severity:3,
  status:1
  },{
  id:12,
  createdDate:'10/09/22',
  severity:1,
  status:0
  },{
  id:13,
  createdDate:'01/09/22',
  severity:3,
  status:0
  },{
  id:14,
  createdDate:'04/09/22',
  severity:3,
  status:1
  },{
  id:15,
  createdDate:'04/09/22',
  severity:1,
  status:0
  },{
  id:16,
  createdDate:'05/09/22',
  severity:2,
  status:0
  },{
  id:17,
  createdDate:'03/09/22',
  severity:1,
  status:1
  },{
  id:18,
  createdDate:'03/09/22',
  severity:2,
  status:0
  },{
  id:19,
  createdDate:'10/09/22',
  severity:3,
  status:0
  },{
  id:20,
  createdDate:'01/09/22',
  severity:3,
  status:0
}]
