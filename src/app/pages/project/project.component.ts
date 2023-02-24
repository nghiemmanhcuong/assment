import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMember, Iproject } from '../../entities/user';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Iproject[] = [];
  memberList: IMember[] = [];
  project: Iproject = {
    id: 0,
    name: '',
    status: '',
    totalMoney: 0,
    date: new Date(),
    employs: 0,
    members: []
  };
  url: string = 'http://localhost:3000/projects/';

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private httpService: HttpClient
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.getProjects();
    this.getMembers();
  }
  currentId: any = null;
  onSubmit(projectForm: NgForm) {
    if (projectForm.value.id != 0) {
        this.Edit(projectForm.value)
    } else {
      this.httpService.post(this.url, projectForm.value).subscribe(() => {
        console.log('add project success');
        this.getProjects();
      });
    }
    this.modalService.dismissAll()
  }

  getProjects() {
    this.httpService.get(this.url).subscribe((data) => {
      this.projects = data as Iproject[];
    });
  }

  getMembers() {
    this.httpService.get('http://localhost:3000/members/').subscribe((data) => {
      this.memberList = data as IMember[];
    })
  }

  open(content: any) {
    this.modalService.open(content);
    this.project = {
        id: 0,
        name: '',
        status: '',
        totalMoney: 0,
        date: new Date(),
        employs: 0,
        members:[]
      };
  }

  Delete(id: number) {
    if (confirm('Are you sure you want to delete this project')) {
      this.httpService.delete(this.url + id).subscribe(() => {
        console.log('delete project success');
        this.getProjects();
        this.modalService.dismissAll()
      });
    }
  }

  Edit(formData: Iproject) {
    this.httpService.put(this.url + formData.id, formData).subscribe(() => {
      console.log('edit project success');
      this.getProjects();
    });
  }

  openEditModal(id: number, content: any) {
    this.modalService.open(content);
    this.httpService.get(this.url + id).subscribe((data) => {
      this.project = data as Iproject;
    });
  }
}
