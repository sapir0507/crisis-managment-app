import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PeriodicElement } from './db/Ielement.data';
import {ELEMENT_DATA} from './db/element.data';


@Component({
  selector: 'app-crisis-table',
  templateUrl: './crisis-table.component.html',
  styleUrls: ['./crisis-table.component.scss']
})
export class CrisisTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'createdDate', 'severity', 'status'];
  SortDirection : 'asc' | 'desc' | '' = "desc";
  constantIdsForTable: number[] = [] ;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private cd: ChangeDetectorRef
    ) {}

  @ViewChild(MatSort)
  sort!: MatSort;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.active = "severity";
    this.sort.direction = this.SortDirection;
    this.sort.disabled = true;
    this.dataSource.sort = this.sort;
    this.cd.detectChanges()
   
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

  getClass(class_id: number):string{
    switch (class_id) {
      case 1:
        return "Low"
      case 2:
        return "Medium"
      case 3:
        return "Critical"
      default:
        return ""
        break;
    }
  }
}
