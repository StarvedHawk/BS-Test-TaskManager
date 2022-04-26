import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-edit-emp',
  templateUrl: './show-edit-emp.component.html',
  styleUrls: ['./show-edit-emp.component.css']
})
export class ShowEditEmpComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private service:SharedService) {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   }

  id:any=0
  Employee:any=[]
  TaskList:any=[]
  ngOnInit(): void {
    this.getEmployeeInfo()
  }
  getEmployeeInfo(){
    this.service.getSpecificEmployee(this.id).subscribe(data=>{
      this.Employee=data;
    })
  }

}
