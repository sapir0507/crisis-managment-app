import { MaterialModule } from './../../modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { MyButtonComponent } from './my-button/my-button.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    MyButtonComponent
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
