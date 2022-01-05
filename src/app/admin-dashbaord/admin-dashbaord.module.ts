import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashbaordRoutingModule } from './admin-dashbaord-routing.module';
import { AdminDashbaordComponent } from './admin-dashbaord.component';


@NgModule({
  declarations: [
    AdminDashbaordComponent
  ],
  imports: [
    CommonModule,
    AdminDashbaordRoutingModule
  ]
})
export class AdminDashbaordModule { }
