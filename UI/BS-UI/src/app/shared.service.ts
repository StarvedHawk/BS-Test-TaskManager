import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api"

  constructor(private http:HttpClient) { }

  getManagersList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskAdmin')
  }

  getManagedEmployees(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TaskAdmin/GetAllManagedEmployees/'+val)
  }

  addManager(val:any){
    return this.http.post<any>(this.APIUrl+'/TaskAdmin',val)
  }

  getEmployeesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees')
  }
  getSpecificEmployee(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees/'+val)
  }
  getAllTasks(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees/GetAllTasks/'+val)
  }
  getCompletedTasks(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees/GetCompletedTasks'+val)
  }
  getIncompleteTasks(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employees/GetIncompleteTasks'+val)
  }
  addEmployee(val:any){
    return this.http.post<any>(this.APIUrl+'/Employees',val)
  }
  getTasksList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Task')
  }
  addTask(val:any){
    return this.http.post<any>(this.APIUrl+'/Task',val)
  }
  updateTask(val:any){
    return this.http.put<any>(this.APIUrl+'/Task',val)
  }
  deleteTask(val:any){
    return this.http.delete<any>(this.APIUrl+'/Task/'+val)
  }
  completeTask(val:any){
    return this.http.delete<any>(this.APIUrl+'/Task/CompleteTask/'+val)
  }
  
}
