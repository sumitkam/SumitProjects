import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoList } from 'src/app/model/todo-list';

@Component({
  selector: 'app-todo-list-edit-dialog',
  templateUrl: './todo-list-edit-dialog.component.html',
  styleUrls: ['./todo-list-edit-dialog.component.scss']
})
export class TodoListEditDialogComponent implements OnInit {

  editFormGroup = new FormGroup({
    taskName:  new FormControl(''),
    targetDate: new FormControl(new Date(), [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<TodoListEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoList,
  ) {}

  ngOnInit() {
    this.editFormGroup.patchValue({
      taskName: this.data.taskName,
      targetDate: this.data.targetDate
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleOkClick() {
    this.dialogRef.close(this.editFormGroup.value);

  }

}
