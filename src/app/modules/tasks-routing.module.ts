import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
import { TaskComponent } from '../components/task/task.component';

const taskRoutes: Routes = [
  {path:'task',component:TaskComponent},
  { path: 'detail/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(taskRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
