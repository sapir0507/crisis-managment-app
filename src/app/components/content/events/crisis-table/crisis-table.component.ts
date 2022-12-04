import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface PeriodicElement {
  id: number;
  _id?: number;
  createdDate: string;
  severity: number;
  status: number;
}


@Component({
  selector: 'app-crisis-table',
  templateUrl: './crisis-table.component.html',
  styleUrls: ['./crisis-table.component.scss']
})
export class CrisisTableComponent {
  displayedColumns: string[] = ['id', 'createdDate', 'severity', 'status'];
  SortDirection : 'asc' | 'desc' | '' = "desc";
  constantIdsForTable: number[] = [] ;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort!: MatSort;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.active = "severity";
    this.sort.direction = this.SortDirection;
    this.sort.disabled=true;
    this.dataSource.sort = this.sort;
   
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      this.constantIdsForTable.push(i);
    }
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
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
