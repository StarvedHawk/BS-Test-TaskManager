import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {



  constructor(private service:SharedService) { }
  @Input() task:any;
  TaskID:number=0;
  TaskName:string="";
  TaskDesc:string="";
  EmployeeId:number=0;
  IS_COMPLETE:any=0;
  ngOnInit(): void {
    console.log(this.task)
    this.TaskID=this.task.TASK_ID,
    this.TaskName=this.task.TASK_NAME,
    this.TaskDesc=this.task.TASK_DESC,
    this.EmployeeId=this.task.EMPLOYEE_ID,
    this.IS_COMPLETE=this.task.IS_COMPLETE
  }

  addTask(){
    var value= {TASK_ID:this.TaskID,
                TASK_NAME:this.TaskName,
                TASK_DESC:this.TaskDesc,
                EMPLOYEE_ID:this.EmployeeId}
    this.service.addTask(value).subscribe(res=>{
      alert(res.toString());
    });
  }

  editTask(){
    var value= {TASK_ID:this.TaskID,
                TASK_NAME:this.TaskName,
                TASK_DESC:this.TaskDesc,
                EMPLOYEE_ID:this.EmployeeId}
this.service.updateTask(value).subscribe(res=>{
alert(res.toString());
});
  }

}
