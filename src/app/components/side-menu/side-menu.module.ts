import { MaterialModule } from './../../modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SideMenuComponent
  ]
})
export class SideMenuModule { }
