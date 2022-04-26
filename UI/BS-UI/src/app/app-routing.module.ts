import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { ManagersComponent } from './managers/managers.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'employee/:id',component:EmployeeComponent},
  {path:'TaskManager',component:ManagersComponent},
  {path:'Task/:id',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
