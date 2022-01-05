import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashbaordComponent } from './user-dashbaord.component';

const routes: Routes = [{ path: '', component: UserDashbaordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashbaordRoutingModule { }
