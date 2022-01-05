import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashbaordRoutingModule } from './user-dashbaord-routing.module';
import { UserDashbaordComponent } from './user-dashbaord.component';


@NgModule({
  declarations: [
    UserDashbaordComponent
  ],
  imports: [
    CommonModule,
    UserDashbaordRoutingModule
  ]
})
export class UserDashbaordModule { }
