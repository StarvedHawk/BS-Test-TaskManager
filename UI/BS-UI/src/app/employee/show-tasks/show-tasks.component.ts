import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private service:SharedService) {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   }
  id:any=0
  Employee:any=[]
  TaskList:any=[]
  ngOnInit(): void {
    this.refreshTaskList()
  }
  refreshTaskList(){
    this.service.getAllTasks(this.id).subscribe(data=>{
      this.TaskList=data;
      console.log(data)
      console.log(this.TaskList)
    })
  }

  ModalTitle:string=""
  ActivateAddEditTaskComp:boolean=false;
  task:any;
  addClick(){
    this.task={
      TASK_ID : 0,
      EMPLOYEE_ID:this.id,
      TASK_NAME:"",
      TASK_DESC:"",
      IS_COMPLETE:0

    }
    console.log(this.task)
    this.ModalTitle="Add Tasks"
    this.ActivateAddEditTaskComp=true

  }

  editClick(taskObj:any){
    this.task=taskObj
    this.ModalTitle="Edit Tasks"
    this.ActivateAddEditTaskComp=true

  }

  clickClose(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }

  deleteTask(TaskId:any){
    this.service.deleteTask(TaskId).subscribe(res=>{
      alert(res.toString());
      this.refreshTaskList();
      });
      console.log(TaskId)
    
  }
}
