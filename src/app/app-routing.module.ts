import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // userDashboard and adminDashboard modules are lazy loaded into this module
  { path: 'userDashboard', loadChildren: () => import('./user-dashbaord/user-dashbaord.module').then(m => m.UserDashbaordModule) },
  { path: 'adminDashboard', loadChildren: () => import('./admin-dashbaord/admin-dashbaord.module').then(m => m.AdminDashbaordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
