import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id:any=0
  Employee:any=[]
  TaskList:any=[]

  constructor(private _Activatedroute:ActivatedRoute,private service:SharedService) {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   }
  

  ngOnInit(): void {

  }

}
