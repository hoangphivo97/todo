import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tasks: Task[] = [];
  task:Task|undefined;
  text!:string;
  day!:string;
  @Output() onEditTask:EventEmitter<Task>=new EventEmitter();

  constructor(private location:Location,
    private taskService:TaskService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTaskDetail();

  }

  getTaskDetail(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.taskService.getTaskDetail(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  onSave(): void {
    if (this.task) {
      this.taskService.updateTask(this.task)
        .subscribe(()=>{
          alert("Update Success")
          window.location.reload()
        });
        
        
    }
  }

  


}
