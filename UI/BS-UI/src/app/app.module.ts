import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Dont use CAPS when making angular components from CLI

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagersComponent } from './managers/managers.component';
import { ShowManagersComponent } from './managers/show-managers/show-managers.component';
import { AddManagersComponent } from './managers/add-managers/add-managers.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEditEmpComponent } from './employee/show-edit-emp/show-edit-emp.component';
import { ShowTasksComponent } from './employee/show-tasks/show-tasks.component';
import { AddTasksComponent } from './employee/add-tasks/add-tasks.component';
import { AddEmployeeComponent } from './managers/add-employee/add-employee.component';
import { SharedService } from './shared.service';
import { TaskComponent } from './task/task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { CompleteTaskComponent } from './task/complete-task/complete-task.component';


import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

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
    AddEmployeeComponent,
    TaskComponent,
    ShowTaskComponent,
    CompleteTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

