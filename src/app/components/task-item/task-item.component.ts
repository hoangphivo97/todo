import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { faPencil} from '@fortawesome/free-solid-svg-icons/faPencil';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:Task;
  @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter()
  faTimes = faTimes;
  faPencil = faPencil;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

}
