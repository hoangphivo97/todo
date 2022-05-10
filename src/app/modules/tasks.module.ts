import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';

import {TaskDetailComponent} from '../components/task-detail/task-detail.component'
import { TaskComponent } from '../components/task/task.component';


@NgModule({
  declarations: [TaskDetailComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ]
})
export class TasksModule { }
