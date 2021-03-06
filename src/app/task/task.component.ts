import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
   task : Task;
  @Output()
  OnDeleted :EventEmitter<Task> =new EventEmitter();



  isSelected: boolean;



  constructor() { }

  ngOnInit(): void {
  }

  deleted(){
   this.OnDeleted.emit(this.task);
  }






}
