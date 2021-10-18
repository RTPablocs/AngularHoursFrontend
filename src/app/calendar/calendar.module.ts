import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { DayComponent } from './day/day.component';



@NgModule({
  declarations: [
    BaseComponent,
    DayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
