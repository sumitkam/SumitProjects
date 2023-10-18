import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoList } from 'src/app/model/todo-list';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoListEditDialogComponent } from './todo-list-edit-dialog/todo-list-edit-dialog.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  dataObj : TodoList = new TodoList;
  dataArr : TodoList[] = [];
  addDataValue : string = '';
  editDataValue : string = '';
  listData!: string;

  targetDate = new FormControl(new Date(), [Validators.required]);

  constructor(private todoListService : TodoListService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.editDataValue = '';
    this.addDataValue = '';
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
    this.dataObj.taskName = this.addDataValue;
    this.dataObj.targetDate = this.targetDate.value;
    this.todoListService.addData(this.dataObj).subscribe(res => {
      this.addDataValue = '';
      this.getAllData();
    }, err => {
      alert(err);
    })
  }

  editData() {
    this.dataObj.taskName = this.editDataValue;
    this.todoListService.editData(this.dataObj).subscribe(res => {
      this.getAllData();
    }, err => {
      alert("failed to update data");
    })
  }

  deleteData(data :TodoList) {
    this.todoListService.deleteData(data).subscribe(res => {
      this.getAllData();
    }, err => {
      alert("failed to delete data");
    })
  }

  call(Edata: TodoList) {
    this.dataObj = Edata;
    this.editDataValue = Edata.taskName;
  }

  openDialog(data: TodoList): void {
    const dialogRef = this.dialog.open(TodoListEditDialogComponent, {
      data: data,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      data.taskName = result.taskName;
      data.targetDate = result.targetDate;
      this.call(data);
      this.editData();
    });
  }

}
