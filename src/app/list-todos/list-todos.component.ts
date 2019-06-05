import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  )
  {}
}




@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

message:string
  // todo = {
  //   id:1, description:'Switch Job'
  // }

  // todos=[
  //   {id:1,description:'Switch Job',},
  //   {id:2,description:"Learn Swimming"},
  //   {id:3,description:"GO Goa"}
  // ]

  // todos= 
  // [
  //   new Todo(1,'Switch Job',false,new Date()),
  //   new Todo(2,'Learn Swimming',false,new Date()),
  //   new Todo(3,'Go Goa',false,new Date()),
  // ]

  todos: Todo[]

  constructor(
    private todoService : TodoDataService,
    private router : Router

  ) { }

  ngOnInit() {

    this.refreshTodos();
    
  }

  refreshTodos()
  {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }

    );
  }

  deleteTodo(id)
  {
    console.log(`delete todo ${id} clicked!!`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted Todo ${id} successfully!!!`;
        this.refreshTodos();
      }

    );
  }

  updateTodo(id)
  {
    console.log(`updated todo ${id}`);
    //http://localhost:4200/todos/1
    this.router.navigate(['todos',id]);
  }

  addTodo()
  {
    console.log("add todo clicked")
    this.router.navigate(['todos',-1])
  }



}
