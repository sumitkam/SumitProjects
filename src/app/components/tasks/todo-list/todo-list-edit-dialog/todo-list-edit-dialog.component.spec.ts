import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListEditDialogComponent } from './todo-list-edit-dialog.component';

describe('TodoListEditDialogComponent', () => {
  let component: TodoListEditDialogComponent;
  let fixture: ComponentFixture<TodoListEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListEditDialogComponent]
    });
    fixture = TestBed.createComponent(TodoListEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
