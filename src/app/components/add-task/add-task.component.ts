import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  id!:number;
  text!:string;
  day!:string;
  showAddTask!:boolean;
  subscription!:Subscription;


  constructor(private uiService:UiService) {
    this.subscription =  this.uiService.onToggle().subscribe((value)=>this.showAddTask=value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add task');
      return;
    }

    const newTask = {
      id:this.id,
      todo:this.text,
      day:this.day
    }

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
  }
  
}
