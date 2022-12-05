import { ICrisis } from './../../../../services/crisis.interface';
import { UtilsService } from './../../../../services/utils.service';
import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { PeriodicElement } from './db/Ielement.data';
import {ELEMENT_DATA} from './db/element.data';


@Component({
  selector: 'app-crisis-table',
  templateUrl: './crisis-table.component.html',
  styleUrls: ['./crisis-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'createdDate', 'severity', 'status'];
  SortDirection : 'asc' | 'desc' | '' = "desc";
  constantIdsForTable: number[] = [] ;

  crisis_elements: ICrisis[] = []

  dataSource : any;

  
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private cd: ChangeDetectorRef,
    private crisis_service: UtilsService
    ) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  async ngAfterViewInit() {
    this.crisis_elements = await this.crisis_service.get_all_crisis();
    this.dataSource = new MatTableDataSource<ICrisis>(this.crisis_elements);
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
