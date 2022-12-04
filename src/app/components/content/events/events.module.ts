import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { CrisisTableComponent } from './crisis-table/crisis-table.component';


@NgModule({
  declarations: [
    EventsComponent,
    CrisisTableComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
