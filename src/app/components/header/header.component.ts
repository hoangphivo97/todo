import { Component, OnInit,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string='TODO App'
  showAddTask!:boolean;
  subscription!: Subscription;
  @Output() text:any;
  @Output() routerLink:any;
  @Output() routerLinkActive:any;

  constructor(private uiService:UiService) {
    this.subscription =  this.uiService.onToggle().subscribe((value)=>this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
