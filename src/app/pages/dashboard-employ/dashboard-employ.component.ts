import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../entities/user';
import { Iproject } from '../../entities/user';
import { Icustom } from '../../entities/user';
import { NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../../entities/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-employ',
  templateUrl: './dashboard-employ.component.html',
  styleUrls: ['./dashboard-employ.component.css'],
})
export class DashboardEmployComponent implements OnInit {
  tasks: ITask[] = [];
  projects: Iproject[] = [];
  url: string = 'http://localhost:3000/';
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private httpService: HttpClient
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  taskData: any = {
    id: 0,
    name: '',
    description: '',
    project: '',
    employee: '',
    priority: '',
    status: '',
  };
  currentId: any = null;
  onSubmit(taskForm: NgForm) {
    if (taskForm.value.id != 0) {
      this.httpService
        .put(this.url + `tasks/${taskForm.value.id}`, taskForm.value)
        .subscribe(() => {
          console.log('edit task successfully');
          this.getTasks();
        });
    } else {
      this.httpService
        .post(this.url + 'tasks', taskForm.value)
        .subscribe(() => {
          console.log('add task successfully');
          this.getTasks();
        });
    }
    this.modalService.dismissAll();
  }
  today = Date.now();
  users: any;

  ngOnInit() {
    this.httpService.get(this.url + 'projects').subscribe((data) => {
      this.projects = data as Iproject[];
    });
    this.getTasks();
  }
  getTasks() {
    this.httpService.get(this.url + 'tasks').subscribe((data) => {
      this.tasks = data as ITask[];
    });
  }
  editProject(id: number, centent: any) {
    this.modalService.open(centent);
    this.httpService.get(this.url + `tasks/${id}`).subscribe((data) => {
      this.taskData = data;
    });
  }
  open(content: any) {
    this.modalService.open(content);
    this.taskData = {
      id: 0,
      name: '',
      description: '',
      project: '',
      employee: '',
      priority: '',
      status: '',
    };
  }
  removeTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.httpService.delete(this.url + `tasks/${id}`).subscribe(() => {
        this.modalService.dismissAll();
        this.getTasks();
      });
    }
  }

}
