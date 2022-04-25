import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagersComponent } from './managers/managers.component';
import { ShowManagersComponent } from './Managers/show-managers/show-managers.component';
import { AddManagersComponent } from './Managers/add-managers/add-managers.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEditEmpComponent } from './Employee/show-edit-emp/show-edit-emp.component';
import { ShowTasksComponent } from './Employee/show-tasks/show-tasks.component';
import { AddTasksComponent } from './Employee/add-tasks/add-tasks.component';
import { AddEmployeeComponent } from './Managers/add-employee/add-employee.component';
import { SharedService } from './shared.service';
@NgModule({
  declarations: [
    AppComponent,
    ManagersComponent,
    ShowManagersComponent,
    AddManagersComponent,
    EmployeeComponent,
    ShowEditEmpComponent,
    ShowTasksComponent,
    AddTasksComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
