import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardEmployComponent } from './pages/dashboard-employ/dashboard-employ.component';
import { PjectDetailComponent } from './pages/pject-detail/pject-detail.component';
import { MembersComponent } from './pages/members/members.component';

const routes:Routes =[
      {path:'',component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'task',component:TaskComponent},
      {path:'project',component:ProjectComponent},
      {path:'employ',component:DashboardEmployComponent},
      {path:'member',component:MembersComponent},
      {path:'dashboard/project/:id',component:PjectDetailComponent},
]

@NgModule({
      imports : [RouterModule.forRoot(routes)],
      exports : [RouterModule]
})
export class AppRoutingModule { }
