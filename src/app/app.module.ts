import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LeaderComponent } from './leader/leader.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardEmployComponent } from './pages/dashboard-employ/dashboard-employ.component';
import { PjectDetailComponent } from './pages/pject-detail/pject-detail.component';
import { MembersComponent } from './pages/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaderComponent,
    EmployeeComponent,
    DashboardComponent,
    LoginComponent,
    TaskComponent,
    ProjectComponent,
    DashboardEmployComponent,
    PjectDetailComponent,
    MembersComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
