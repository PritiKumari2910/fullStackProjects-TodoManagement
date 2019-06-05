import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent, canActivate:[RouteGuardService]},
// to take a query parameter while loading welcome component
{path:'todos',component:ListTodosComponent, canActivate:[RouteGuardService]},
{path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
{path:'todos/:id',component:TodoComponent, canActivate:[RouteGuardService]},



//this should be at last 
{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
