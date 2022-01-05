import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbaordComponent } from './admin-dashbaord.component';

const routes: Routes = [{ path: '', component: AdminDashbaordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashbaordRoutingModule { }
