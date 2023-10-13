import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/model/todo-list';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  dataObj : TodoList = new TodoList;
  dataArr : TodoList[] = [];
  addDataValue : string = '';

  constructor(private todoListService : TodoListService){}

  ngOnInit(): void {
    this.dataObj = new TodoList;
    this.dataArr = [];
    this.getAllData();
  }

  getAllData() {
    this.todoListService.getData().subscribe(res => {
      this.dataArr = res;
    }, err => {
      alert("No data found");
    })
  }

  addData() {
    this.dataObj.data = this.addDataValue
    this.todoListService.addData(this.dataObj).subscribe(res => {
      this.ngOnInit();
      this.addDataValue = '';
    }, err => {
      alert(err);
    })
  }

  editData() {
    this.todoListService.editData(this.dataObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("failed to update data");
    })
  }

  deleteData(data :TodoList) {
    this.todoListService.deleteData(data).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("failed to delete data");
    })
  }

}
