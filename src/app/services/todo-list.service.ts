import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoList } from '../model/todo-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoServiceUrl : string ;

  constructor(private http: HttpClient) {
    this.todoServiceUrl = "http://localhost:3000/todo-list"
   }

   addData(data: TodoList) : Observable<TodoList> {
    return this.http.post<TodoList>(this.todoServiceUrl,data);
  }

  getData() : Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.todoServiceUrl);
  }
  deleteData(data: TodoList) : Observable<TodoList> {
    return this.http.delete<TodoList>(this.todoServiceUrl+'/'+data.id);
  }
  editData(data: TodoList) : Observable<TodoList> {
    return this.http.put<TodoList>(this.todoServiceUrl+'/'+data.id,data);
  }

}


