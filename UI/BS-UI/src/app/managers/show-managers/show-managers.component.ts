import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-managers',
  templateUrl: './show-managers.component.html',
  styleUrls: ['./show-managers.component.css']
})
export class ShowManagersComponent implements OnInit {

  constructor(private service:SharedService) { }

  ManagerList:any=[];
  EmployeeList:any=[]
  currentManager:any=0

  ngOnInit(): void {
    this.refreshManagerList();
  }
  refreshManagerList(){
    this.service.getManagersList().subscribe(data=>{
      this.ManagerList=data;
    })
  }

  getEmployeeList(){
    this.service.getManagedEmployees(this.currentManager).subscribe(data=>{
      this.EmployeeList=data;
      console.log(data)
      console.log(this.EmployeeList)
    })
  }

  setCurrentManager(val:any){
    if (this.currentManager==val) {
      this.currentManager=0
    } else {
      this.currentManager=val
      this.getEmployeeList()
    }
    
  }

}
