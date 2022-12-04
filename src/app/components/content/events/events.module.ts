import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { CrisisTableComponent } from './crisis-table/crisis-table.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    EventsComponent,
    CrisisTableComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule
  ]
})
export class EventsModule { }
